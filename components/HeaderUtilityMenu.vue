<template>
  <div
    ref="root"
    class="utility-menu"
    :class="{ 'is-open': isOpen, 'is-compact': compact }"
  >
    <button
      class="utility-menu__trigger"
      type="button"
      :aria-haspopup="true"
      :aria-expanded="isOpen.toString()"
      :aria-label="ariaLabel"
      @click="toggleMenu"
    >
      <span class="utility-menu__icon" aria-hidden="true">
        <svg v-if="currentOption.icon === 'moon'" viewBox="0 0 24 24">
          <path
            d="M20.68 14.38A8.5 8.5 0 0 1 9.62 3.32a.75.75 0 0 0-.91-.98A10 10 0 1 0 21.66 15.3a.75.75 0 0 0-.98-.92Z"
            fill="currentColor"
          />
        </svg>
        <svg v-else-if="currentOption.icon === 'sun'" viewBox="0 0 24 24">
          <path
            d="M12 6.25A5.75 5.75 0 1 0 17.75 12 5.76 5.76 0 0 0 12 6.25Zm0-4a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75Zm0 16.5a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75Zm9.75-7.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1 0-1.5Zm-16.5 0a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1 0-1.5Zm12.34-5.59a.75.75 0 0 1 1.06 1.06l-1.06 1.06a.75.75 0 0 1-1.06-1.06Zm-11.18 11.18a.75.75 0 0 1 1.06 1.06l-1.06 1.06a.75.75 0 0 1-1.06-1.06Zm12.24 2.12a.75.75 0 0 1-1.06 0l-1.06-1.06a.75.75 0 0 1 1.06-1.06l1.06 1.06a.75.75 0 0 1 0 1.06Zm-11.18-11.18a.75.75 0 0 1-1.06 0L5.35 6.72a.75.75 0 1 1 1.06-1.06l1.06 1.06a.75.75 0 0 1 0 1.06Z"
            fill="currentColor"
          />
        </svg>
        <svg v-else-if="currentOption.icon === 'desktop'" viewBox="0 0 24 24">
          <path
            d="M4.75 5.5A2.25 2.25 0 0 0 2.5 7.75v7.5a2.25 2.25 0 0 0 2.25 2.25h4.94l-.94 2.25H7.5a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-1.25l-.94-2.25h4.94a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25Zm-.75 2.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75H4.75a.75.75 0 0 1-.75-.75Z"
            fill="currentColor"
          />
        </svg>
        <svg v-else-if="currentOption.icon === 'globe'" viewBox="0 0 24 24">
          <path
            d="M12 2.5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 12 2.5Zm6.84 8.75h-3.1a14.4 14.4 0 0 0-1.34-5A8.03 8.03 0 0 1 18.84 11.25Zm-6.09-7.06c.89.74 1.95 2.82 2.51 5.56h-5.52c.56-2.74 1.62-4.82 2.51-5.56ZM4.91 12.75H8.1a16.76 16.76 0 0 0 0 4.5H4.91a7.93 7.93 0 0 1 0-4.5Zm.25-1.5a8.03 8.03 0 0 1 4.44-5 14.4 14.4 0 0 0-1.34 5Zm4.44 7.5a14.4 14.4 0 0 0 1.34 5 8.03 8.03 0 0 1-4.44-5Zm.14-1.5a15.22 15.22 0 0 1 0-4.5h6.52a15.22 15.22 0 0 1 0 4.5Zm3.01 2.99c-.89-.74-1.95-2.82-2.51-5.49h5.52c-.56 2.67-1.62 4.75-2.51 5.49Zm1.65 1.51a14.4 14.4 0 0 0 1.34-5h3.1a8.03 8.03 0 0 1-4.44 5Z"
            fill="currentColor"
          />
        </svg>
      </span>

      <span v-if="!compact" class="utility-menu__content">
        <span class="utility-menu__label">{{ label }}</span>
        <span class="utility-menu__value">{{ currentOption.label }}</span>
      </span>

      <span v-if="!compact" class="utility-menu__chevron" aria-hidden="true">
        <svg viewBox="0 0 16 16">
          <path
            d="M3.47 5.97a.75.75 0 0 1 1.06 0L8 9.44l3.47-3.47a.75.75 0 0 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06Z"
            fill="currentColor"
          />
        </svg>
      </span>
    </button>

    <transition name="utility-menu-fade">
      <div
        v-if="isOpen"
        class="utility-menu__panel"
        role="menu"
        :aria-label="label"
      >
        <button
          v-for="option in options"
          :key="option.value"
          class="utility-menu__option"
          :class="{ 'is-active': option.value === value }"
          type="button"
          role="menuitemradio"
          :aria-checked="(option.value === value).toString()"
          @click="selectOption(option.value)"
        >
          <span class="utility-menu__icon" aria-hidden="true">
            <svg v-if="option.icon === 'moon'" viewBox="0 0 24 24">
              <path
                d="M20.68 14.38A8.5 8.5 0 0 1 9.62 3.32a.75.75 0 0 0-.91-.98A10 10 0 1 0 21.66 15.3a.75.75 0 0 0-.98-.92Z"
                fill="currentColor"
              />
            </svg>
            <svg v-else-if="option.icon === 'sun'" viewBox="0 0 24 24">
              <path
                d="M12 6.25A5.75 5.75 0 1 0 17.75 12 5.76 5.76 0 0 0 12 6.25Zm0-4a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75Zm0 16.5a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75Zm9.75-7.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1 0-1.5Zm-16.5 0a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1 0-1.5Zm12.34-5.59a.75.75 0 0 1 1.06 1.06l-1.06 1.06a.75.75 0 0 1-1.06-1.06Zm-11.18 11.18a.75.75 0 0 1 1.06 1.06l-1.06 1.06a.75.75 0 0 1-1.06-1.06Zm12.24 2.12a.75.75 0 0 1-1.06 0l-1.06-1.06a.75.75 0 0 1 1.06-1.06l1.06 1.06a.75.75 0 0 1 0 1.06Zm-11.18-11.18a.75.75 0 0 1-1.06 0L5.35 6.72a.75.75 0 1 1 1.06-1.06l1.06 1.06a.75.75 0 0 1 0 1.06Z"
                fill="currentColor"
              />
            </svg>
            <svg v-else-if="option.icon === 'desktop'" viewBox="0 0 24 24">
              <path
                d="M4.75 5.5A2.25 2.25 0 0 0 2.5 7.75v7.5a2.25 2.25 0 0 0 2.25 2.25h4.94l-.94 2.25H7.5a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-1.25l-.94-2.25h4.94a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25Zm-.75 2.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75H4.75a.75.75 0 0 1-.75-.75Z"
                fill="currentColor"
              />
            </svg>
            <svg v-else-if="option.icon === 'globe'" viewBox="0 0 24 24">
              <path
                d="M12 2.5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 12 2.5Zm6.84 8.75h-3.1a14.4 14.4 0 0 0-1.34-5A8.03 8.03 0 0 1 18.84 11.25Zm-6.09-7.06c.89.74 1.95 2.82 2.51 5.56h-5.52c.56-2.74 1.62-4.82 2.51-5.56ZM4.91 12.75H8.1a16.76 16.76 0 0 0 0 4.5H4.91a7.93 7.93 0 0 1 0-4.5Zm.25-1.5a8.03 8.03 0 0 1 4.44-5 14.4 14.4 0 0 0-1.34 5Zm4.44 7.5a14.4 14.4 0 0 0 1.34 5 8.03 8.03 0 0 1-4.44-5Zm.14-1.5a15.22 15.22 0 0 1 0-4.5h6.52a15.22 15.22 0 0 1 0 4.5Zm3.01 2.99c-.89-.74-1.95-2.82-2.51-5.49h5.52c-.56 2.67-1.62 4.75-2.51 5.49Zm1.65 1.51a14.4 14.4 0 0 0 1.34-5h3.1a8.03 8.03 0 0 1-4.44 5Z"
                fill="currentColor"
              />
            </svg>
          </span>

          <span class="utility-menu__option-copy">
            <span class="utility-menu__option-label">{{ option.label }}</span>
            <span
              v-if="option.description"
              class="utility-menu__option-description"
            >
              {{ option.description }}
            </span>
          </span>
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'HeaderUtilityMenu',
  props: {
    ariaLabel: {
      type: String,
      required: true
    },
    compact: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  computed: {
    currentOption() {
      return (
        this.options.find((option) => option.value === this.value) ||
        this.options[0]
      )
    }
  },
  mounted() {
    document.addEventListener('click', this.onDocumentClick)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.onDocumentClick)
  },
  methods: {
    onDocumentClick(event) {
      if (!this.$refs.root || !this.isOpen) return
      if (!this.$refs.root.contains(event.target)) {
        this.isOpen = false
      }
    },
    selectOption(value) {
      this.$emit('select', value)
      this.isOpen = false
    },
    toggleMenu() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style lang="scss" scoped>
.utility-menu {
  position: relative;
}

.utility-menu__trigger {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  min-height: 48px;
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 0.7rem 0.95rem;
  background: rgba(255, 255, 255, 0.55);
  color: var(--ink);
  backdrop-filter: blur(14px);
  box-shadow: 0 10px 24px rgba(28, 23, 18, 0.08);
  transition: transform var(--duration-fast) var(--ease-out),
    border-color var(--duration-fast) var(--ease-out),
    background-color var(--duration-fast) var(--ease-out),
    color var(--duration-fast) var(--ease-out);
}

.utility-menu__trigger:hover {
  transform: translateY(-1px);
  border-color: rgba(143, 111, 62, 0.4);
  background: rgba(255, 255, 255, 0.78);
}

.utility-menu__icon {
  width: 1.55rem;
  height: 1.55rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: currentColor;
  flex-shrink: 0;
}

.utility-menu__icon svg {
  width: 100%;
  height: 100%;
}

.utility-menu__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0;
}

.utility-menu__label {
  font-family: 'Manrope', sans-serif;
  font-size: 0.58rem;
  line-height: 1;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--muted);
}

.utility-menu__value {
  font-family: 'Manrope', sans-serif;
  font-size: 0.92rem;
  font-weight: 600;
  line-height: 1.1;
}

.utility-menu__chevron {
  width: 0.95rem;
  height: 0.95rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--muted);
  flex-shrink: 0;
}

.utility-menu__chevron svg {
  width: 100%;
  height: 100%;
}

.utility-menu__panel {
  position: absolute;
  top: calc(100% + 0.65rem);
  right: 0;
  width: min(18rem, calc(100vw - 2rem));
  padding: 0.5rem;
  border: 1px solid var(--line);
  border-radius: 20px;
  background: var(--surface-elevated, rgba(255, 251, 245, 0.96));
  box-shadow: 0 24px 48px rgba(20, 16, 12, 0.16);
  backdrop-filter: blur(20px);
  z-index: 30;
}

.utility-menu__option {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.9rem 0.95rem;
  border: 0;
  border-radius: 14px;
  background: transparent;
  color: var(--ink);
  text-align: left;
  transition: background-color var(--duration-fast) var(--ease-out),
    color var(--duration-fast) var(--ease-out),
    transform var(--duration-fast) var(--ease-out);
}

.utility-menu__option:hover,
.utility-menu__option.is-active {
  background: rgba(143, 111, 62, 0.1);
  color: var(--accent);
}

.utility-menu__option:hover {
  transform: translateX(2px);
}

.utility-menu__option-copy {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  min-width: 0;
}

.utility-menu__option-label {
  font-family: 'Manrope', sans-serif;
  font-size: 0.98rem;
  font-weight: 600;
}

.utility-menu__option-description {
  font-family: 'Manrope', sans-serif;
  color: var(--muted);
  font-size: 0.78rem;
  line-height: 1.4;
}

.utility-menu.is-compact .utility-menu__trigger {
  min-width: 48px;
  justify-content: center;
  border-radius: 999px;
  padding-inline: 0.72rem;
}

.utility-menu-fade-enter-active,
.utility-menu-fade-leave-active {
  transition: opacity var(--duration-fast) var(--ease-out),
    transform var(--duration-fast) var(--ease-out);
  transform-origin: top right;
}

.utility-menu-fade-enter,
.utility-menu-fade-leave-to {
  opacity: 0;
  transform: translateY(-6px) scale(0.98);
}
</style>
