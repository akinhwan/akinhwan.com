<template>
  <div class="flex flex-col min-h-screen overflow-hidden">
    <section class="relative">
      <!-- Hero content -->
      <div class="max-w-6xl mx-auto px-4 mb-6 sm:px-6 relative">
        <div class="md:pt-20">
          <div class="max-w-3xl mx-auto text-center">
            <h1 class="h1 mb-4" data-aos="fade-up">Let's keep in touch</h1>
            <p
              class="text-xl text-gray-400 mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Every <b>Sunday 10pm</b> EST in your Inbox, I'll share my process
              & progress.
              <br />
              The ups, the downs, and everything in between.
            </p>
          </div>
        </div>
      </div>
      <NewsletterSimple />
      <FeaturesBlocks />

      <Stats />

      <div id="archive" class="max-w-3xl mx-auto text-center mb-8">
        <h2 class="h2 mb-4" data-aos="fade-up">
          Archive<br />
          <!-- <p  class="h4">
          (just me talking to myself for now)
          </p> -->
        </h2>
        <div class="grid grid-cols-3">
          <!-- <div></div> -->
          <ol type="1" class="text-left mx-auto pl-8 list-decimal">
            <li class="mb-4 text-gray-400">
              <a
                class="text-xl hover:underline"
                href="https://eomail6.com/preview?p=60273194-461b-11eb-a3d0-06b4694bee2a&pt=automation&t=1610806707&s=d2619d274e98c71a74109cf86f4dc40e662e7a28e1db23d55aa2dab0dd552879"
                >This is how it all begins...
                <svg
                  class="inline w-3 h-3 fill-current text-purple-400 flex-shrink-0 ml-2"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 5H0v2h6v4l6-5-6-5z" />
                </svg>
              </a>
            </li>
            <li class="mb-4 text-gray-400">
              <a
                class="text-xl hover:underline"
                href="https://eomail6.com/preview?p=7a3aea83-461f-11eb-a3d0-06b4694bee2a&pt=campaign&t=1609729281&s=0f1f9876e2b6b058ed42b94dc9029e75a15f922417f464a1613bb7f60d7b657d"
                >Just Start
                <svg
                  class="inline w-3 h-3 fill-current text-purple-400 flex-shrink-0 ml-2"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 5H0v2h6v4l6-5-6-5z" /></svg
              ></a>
            </li>
            <li class="mb-4 text-gray-400">
              <a
                class="text-xl hover:underline"
                href="https://eomail6.com/preview?p=4472351f-4d06-11eb-a3d0-06b4694bee2a&pt=campaign&t=1610334153&s=ce53c492364c5e0fdf00331401191d0a7b7c49b68dc34f6ae29e3cde1fb5ee58"
                >Keep Moving
                <svg
                  class="inline w-3 h-3 fill-current text-purple-400 flex-shrink-0 ml-2"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 5H0v2h6v4l6-5-6-5z" /></svg
              ></a>
            </li>
            <li class="mb-4 text-gray-400">
              <a
                class="text-xl hover:underline"
                href="https://eomail6.com/preview?p=9bc07704-5919-11eb-a3d0-06b4694bee2a&pt=campaign&t=1610938939&s=03621c779771bf685aa8fa0d7559e4dde6c506890cec1fd1fde66eccd4bd6220"
                >How Eventful
                <svg
                  class="inline w-3 h-3 fill-current text-purple-400 flex-shrink-0 ml-2"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 5H0v2h6v4l6-5-6-5z" /></svg
              ></a>
            </li>
            <li class="mb-4 text-gray-400">
              <a
                class="text-xl hover:underline"
                href="https://eomail6.com/preview?p=78731bf4-5d89-11eb-a3d0-06b4694bee2a&pt=campaign&t=1611543418&s=86cb4438e1d12730f195da77ae3780b076f2894cb28289445e22394ad81f164b"
                >Launch quick, Validate quicker
                <svg
                  class="inline w-3 h-3 fill-current text-purple-400 flex-shrink-0 ml-2"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 5H0v2h6v4l6-5-6-5z" /></svg
              ></a>
            </li>
            <li class="mb-4 text-gray-400">
              <a
                class="text-xl hover:underline"
                href="https://eomail6.com/preview?p=41daa461-62a8-11eb-a3d0-06b4694bee2a&pt=campaign&t=1612148558&s=ad5cb7f1d8cc6b9bc35784a1e9bea6ff7d7b8eadb0a71ca7fc232a4ddc487b28"
                >Dreaming is easy, it's the waking up that's hard.<svg
                  class="inline w-3 h-3 fill-current text-purple-400 flex-shrink-0 ml-2"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 5H0v2h6v4l6-5-6-5z" /></svg
              ></a>
            </li>
            <li class="mb-4 text-gray-400">
              <a
                class="text-xl hover:underline"
                href="https://eomail6.com/preview?p=ce223c61-6a6f-11eb-a3d0-06b4694bee2a&pt=campaign&t=1612833991&s=65da63f2818ae2f7e213c522f2f26d725516b3b1abda4b2513e2282453d1ac0c"
                >Slip but don't fall.<svg
                  class="inline w-3 h-3 fill-current text-purple-400 flex-shrink-0 ml-2"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 5H0v2h6v4l6-5-6-5z" /></svg
              ></a>
            </li>
            <li class="mb-4 text-gray-400">
              <a
                class="text-xl hover:underline"
                href="https://eomail6.com/preview?p=c660eb73-6e3b-11eb-a3d0-06b4694bee2a&pt=campaign&t=1613358119&s=3bf89340528b45fd6c9ef7763d6725a11090cdb980683baed49bfb8af6906850"
                >One Decision to rule them all.<svg
                  class="inline w-3 h-3 fill-current text-purple-400 flex-shrink-0 ml-2"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 5H0v2h6v4l6-5-6-5z" /></svg
              ></a>
            </li>
            <li class="mb-4 text-gray-400">
              <a
                class="text-xl hover:underline"
                href="https://eomail6.com/preview?p=fe7077c2-738a-11eb-a3d0-06b4694bee2a&pt=campaign&t=1613962911&s=0baa9fe44997aaae469d552c4418826f6b7aaff71e90024b19602db6c8177070"
                >Give it a hundred.<svg
                  class="inline w-3 h-3 fill-current text-purple-400 flex-shrink-0 ml-2"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 5H0v2h6v4l6-5-6-5z" /></svg
              ></a>
            </li>
            <li class="mb-4 text-gray-400">
              <a
                class="text-xl hover:underline"
                href="https://eomail6.com/preview?p=d49ba168-7f47-11eb-a3d0-06b4694bee2a&pt=campaign&t=1615172657&s=a3946c77b5d70f3e03cbaa00a0e393e89e471bd9cd7d5ad9f099353d69b9d345"
                >Have 1 good day, then repeat it.<svg
                  class="inline w-3 h-3 fill-current text-purple-400 flex-shrink-0 ml-2"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 5H0v2h6v4l6-5-6-5z" /></svg
              ></a>
            </li>
            <li class="mb-4 text-gray-400">
              <a
                class="text-xl hover:underline"
                href="https://eomail6.com/preview?p=29995304-8525-11eb-a3d0-06b4694bee2a&pt=campaign&t=1615773697&s=8822884a88d2e308898398ac91c58b9772e29df1e94f4f295f9b59e0d319a9c5"
                >Meditate to train your mind.<svg
                  class="inline w-3 h-3 fill-current text-purple-400 flex-shrink-0 ml-2"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 5H0v2h6v4l6-5-6-5z" /></svg
              ></a>
            </li>
            <!-- 12 -->
            <li class="mb-4 text-gray-400">
              <a
                class="text-xl hover:underline"
                href="https://eomail6.com/preview?p=d343a305-8aaa-11eb-a3d0-06b4694bee2a&pt=campaign&t=1616378773&s=4ca6e49230f8148f3ea695d0ec0d6e2c400606ee5ee4195c7a5af8c7c3d5758e"
                >The real risk is mediocrity.<svg
                  class="inline w-3 h-3 fill-current text-purple-400 flex-shrink-0 ml-2"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 5H0v2h6v4l6-5-6-5z" /></svg
              ></a>
            </li>
            <!-- 13 -->
            <li class="mb-4 text-gray-400">
              <a
                class="text-xl hover:underline"
                href="https://eomail6.com/preview?p=af97604a-901f-11eb-a3d0-06b4694bee2a&pt=campaign&t=1616978985&s=76a1b156004868ec2ca34531c441a6a152f6d9c6bc46fcd31d3fe5081ebc544c"
                >Consistency > Intensity
                <svg
                  class="inline w-3 h-3 fill-current text-purple-400 flex-shrink-0 ml-2"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 5H0v2h6v4l6-5-6-5z" /></svg
              ></a>
            </li>
            <!-- 14 -->
            <li class="mb-4 text-gray-400">
              <a
                class="text-xl hover:underline"
                href="https://eomail6.com/web-version?p=7b6140b5-95ac-11eb-a3d0-06b4694bee2a&pt=campaign&t=1617588211&s=f84ea514d2ee6b0604f2069f8389691186cdda6212ecc936ef2a5a794f31ab70"
                >Château Plateau
                <svg
                  class="inline w-3 h-3 fill-current text-purple-400 flex-shrink-0 ml-2"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 5H0v2h6v4l6-5-6-5z" /></svg
              ></a>
            </li>
            <!-- 15 -->
            <li class="mb-4 text-gray-400">
              <a
                class="text-xl hover:underline"
                href="https://eomail6.com/web-version?p=9f592d0b-9b2f-11eb-a3d0-06b4694bee2a&pt=campaign&t=1618193635&s=7f5564d5a2bf3d726c9f559b46acc2cee112bac4c7c76ed0302f1d3186bf8b91"
                >Information Billionaire
                <svg
                  class="inline w-3 h-3 fill-current text-purple-400 flex-shrink-0 ml-2"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 5H0v2h6v4l6-5-6-5z" /></svg
              ></a>
            </li>
            <!-- 16 -->
            <li class="mb-4 text-gray-400">
              <a
                class="text-xl hover:underline"
                href="https://eomail6.com/web-version?p=7f4b65a0-a04b-11eb-a3d0-06b4694bee2a&pt=campaign&t=1618797658&s=1828a5a41cfd0fcd29cf3719449bb58d24e83ac523172d8ac5a57786448a1010"
                >What you resist tends to persist
                <svg
                  class="inline w-3 h-3 fill-current text-purple-400 flex-shrink-0 ml-2"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 5H0v2h6v4l6-5-6-5z" /></svg
              ></a>
            </li>
            <!-- 17 -->
            <li class="mb-4 text-gray-400">
              <a
                class="text-xl hover:underline"
                href="https://eomail6.com/web-version?p=dd41b071-a637-11eb-a3d0-06b4694bee2a&pt=campaign&t=1619406917&s=6ace69bea2f96899a381b820bec1bd0691bbf348201bd978f4c30a0495908cf8"
                >Get what you deserve
                <svg
                  class="inline w-3 h-3 fill-current text-purple-400 flex-shrink-0 ml-2"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 5H0v2h6v4l6-5-6-5z" /></svg
              ></a>
            </li>
            <!-- 18 -->
            <li class="mb-4 text-gray-400">
              <a
                class="text-xl hover:underline"
                href="https://eomail6.com/web-version?p=4b18fc38-b64a-11eb-a3d0-06b4694bee2a&pt=campaign&t=1621216858&s=1de544c0346766be97c18d3f29b12d90d26c4497650273c55490c1a54fb6ba3a"
                >What-The-Hell effect
                <svg
                  class="inline w-3 h-3 fill-current text-purple-400 flex-shrink-0 ml-2"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 5H0v2h6v4l6-5-6-5z" /></svg
              ></a>
            </li>
            <!-- 19 -->
            <!-- <li class="mb-4 text-gray-400">
              <a class="text-xl hover:underline " href="https://eomail6.com/web-version?p=4b18fc38-b64a-11eb-a3d0-06b4694bee2a&pt=campaign&t=1621216858&s=1de544c0346766be97c18d3f29b12d90d26c4497650273c55490c1a54fb6ba3a">What-The-Hell effect
              <svg class="inline w-3 h-3 fill-current text-purple-400 flex-shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 5H0v2h6v4l6-5-6-5z" />
                      </svg></a>
            </li> -->
            <!-- 19 -->
            <!-- <li class="mb-4 text-gray-400">
              <a class="text-xl hover:underline " href="https://eomail6.com/web-version?p=4b18fc38-b64a-11eb-a3d0-06b4694bee2a&pt=campaign&t=1621216858&s=1de544c0346766be97c18d3f29b12d90d26c4497650273c55490c1a54fb6ba3a">What-The-Hell effect
              <svg class="inline w-3 h-3 fill-current text-purple-400 flex-shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 5H0v2h6v4l6-5-6-5z" />
                      </svg></a>
            </li> -->
            <!-- 19 -->
            <!-- <li class="mb-4 text-gray-400">
              <a class="text-xl hover:underline " href="https://eomail6.com/web-version?p=4b18fc38-b64a-11eb-a3d0-06b4694bee2a&pt=campaign&t=1621216858&s=1de544c0346766be97c18d3f29b12d90d26c4497650273c55490c1a54fb6ba3a">What-The-Hell effect
              <svg class="inline w-3 h-3 fill-current text-purple-400 flex-shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 5H0v2h6v4l6-5-6-5z" />
                      </svg></a>
            </li> -->
            <!-- 19 -->
            <!-- <li class="mb-4 text-gray-400">
              <a class="text-xl hover:underline " href="https://eomail6.com/web-version?p=4b18fc38-b64a-11eb-a3d0-06b4694bee2a&pt=campaign&t=1621216858&s=1de544c0346766be97c18d3f29b12d90d26c4497650273c55490c1a54fb6ba3a">What-The-Hell effect
              <svg class="inline w-3 h-3 fill-current text-purple-400 flex-shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 5H0v2h6v4l6-5-6-5z" />
                      </svg></a>
            </li> -->
            <!-- 19 -->
            <!-- <li class="mb-4 text-gray-400">
              <a class="text-xl hover:underline " href="https://eomail6.com/web-version?p=4b18fc38-b64a-11eb-a3d0-06b4694bee2a&pt=campaign&t=1621216858&s=1de544c0346766be97c18d3f29b12d90d26c4497650273c55490c1a54fb6ba3a">What-The-Hell effect
              <svg class="inline w-3 h-3 fill-current text-purple-400 flex-shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 5H0v2h6v4l6-5-6-5z" />
                      </svg></a>
            </li> -->
            <!-- 19 -->
            <!-- <li class="mb-4 text-gray-400">
              <a class="text-xl hover:underline " href="https://eomail6.com/web-version?p=4b18fc38-b64a-11eb-a3d0-06b4694bee2a&pt=campaign&t=1621216858&s=1de544c0346766be97c18d3f29b12d90d26c4497650273c55490c1a54fb6ba3a">What-The-Hell effect
              <svg class="inline w-3 h-3 fill-current text-purple-400 flex-shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 5H0v2h6v4l6-5-6-5z" />
                      </svg></a>
            </li> -->
            <!-- 19 -->
            <!-- <li class="mb-4 text-gray-400">
              <a class="text-xl hover:underline " href="https://eomail6.com/web-version?p=4b18fc38-b64a-11eb-a3d0-06b4694bee2a&pt=campaign&t=1621216858&s=1de544c0346766be97c18d3f29b12d90d26c4497650273c55490c1a54fb6ba3a">What-The-Hell effect
              <svg class="inline w-3 h-3 fill-current text-purple-400 flex-shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 5H0v2h6v4l6-5-6-5z" />
                      </svg></a>
            </li> -->
            <!-- 19 -->
            <!-- <li class="mb-4 text-gray-400">
              <a class="text-xl hover:underline " href="https://eomail6.com/web-version?p=4b18fc38-b64a-11eb-a3d0-06b4694bee2a&pt=campaign&t=1621216858&s=1de544c0346766be97c18d3f29b12d90d26c4497650273c55490c1a54fb6ba3a">What-The-Hell effect
              <svg class="inline w-3 h-3 fill-current text-purple-400 flex-shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 5H0v2h6v4l6-5-6-5z" />
                      </svg></a>
            </li> -->
            <!-- 19 -->
            <!-- <li class="mb-4 text-gray-400">
              <a class="text-xl hover:underline " href="https://eomail6.com/web-version?p=4b18fc38-b64a-11eb-a3d0-06b4694bee2a&pt=campaign&t=1621216858&s=1de544c0346766be97c18d3f29b12d90d26c4497650273c55490c1a54fb6ba3a">What-The-Hell effect
              <svg class="inline w-3 h-3 fill-current text-purple-400 flex-shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 5H0v2h6v4l6-5-6-5z" />
                      </svg></a>
            </li> -->
            <!-- 19 -->
            <!-- <li class="mb-4 text-gray-400">
              <a class="text-xl hover:underline " href="https://eomail6.com/web-version?p=4b18fc38-b64a-11eb-a3d0-06b4694bee2a&pt=campaign&t=1621216858&s=1de544c0346766be97c18d3f29b12d90d26c4497650273c55490c1a54fb6ba3a">What-The-Hell effect
              <svg class="inline w-3 h-3 fill-current text-purple-400 flex-shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 5H0v2h6v4l6-5-6-5z" />
                      </svg></a>
            </li> -->
            <!-- 19 -->
            <!-- <li class="mb-4 text-gray-400">
              <a class="text-xl hover:underline " href="https://eomail6.com/web-version?p=4b18fc38-b64a-11eb-a3d0-06b4694bee2a&pt=campaign&t=1621216858&s=1de544c0346766be97c18d3f29b12d90d26c4497650273c55490c1a54fb6ba3a">What-The-Hell effect
              <svg class="inline w-3 h-3 fill-current text-purple-400 flex-shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 5H0v2h6v4l6-5-6-5z" />
                      </svg></a>
            </li> -->
            <!-- 19 -->
            <!-- <li class="mb-4 text-gray-400">
              <a class="text-xl hover:underline " href="https://eomail6.com/web-version?p=4b18fc38-b64a-11eb-a3d0-06b4694bee2a&pt=campaign&t=1621216858&s=1de544c0346766be97c18d3f29b12d90d26c4497650273c55490c1a54fb6ba3a">What-The-Hell effect
              <svg class="inline w-3 h-3 fill-current text-purple-400 flex-shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 5H0v2h6v4l6-5-6-5z" />
                      </svg></a>
            </li> -->
            <!-- 19 -->
            <!-- <li class="mb-4 text-gray-400">
              <a class="text-xl hover:underline " href="https://eomail6.com/web-version?p=4b18fc38-b64a-11eb-a3d0-06b4694bee2a&pt=campaign&t=1621216858&s=1de544c0346766be97c18d3f29b12d90d26c4497650273c55490c1a54fb6ba3a">What-The-Hell effect
              <svg class="inline w-3 h-3 fill-current text-purple-400 flex-shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 5H0v2h6v4l6-5-6-5z" />
                      </svg></a>
            </li> -->
            <!-- 19 -->
            <!-- <li class="mb-4 text-gray-400">
              <a class="text-xl hover:underline " href="https://eomail6.com/web-version?p=4b18fc38-b64a-11eb-a3d0-06b4694bee2a&pt=campaign&t=1621216858&s=1de544c0346766be97c18d3f29b12d90d26c4497650273c55490c1a54fb6ba3a">What-The-Hell effect
              <svg class="inline w-3 h-3 fill-current text-purple-400 flex-shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 5H0v2h6v4l6-5-6-5z" />
                      </svg></a>
            </li> -->
          </ol>
          <!-- <div></div> -->
        </div>
      </div>

      <div class="max-w-3xl mx-auto text-center">
        <h2 class="h2 mt-8" data-aos="fade-up">Testimonials<br /></h2>
      </div>
      <TestimonialsCarousel />

      <div class="max-w-6xl mx-auto px-4 mb-6 sm:px-6 relative">
        <div class="pt-24 pb-12 md:pb-20">
          <div class="max-w-3xl mx-auto text-center">
            <h1 class="h3 mb-4" data-aos="fade-up">My pledge to readers</h1>
            <p
              class="text-xl text-gray-400 mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              I won't sell your email address to any third parties. I will only
              use it to send you this newsletter. At the bottom of each
              newsletter will be a P.O. Box address, my email address, and a way
              to unsubscribe easily.
            </p>
          </div>
        </div>
      </div>
      <Newsletter />
    </section>
  </div>
</template>


<script>
import TestimonialsCarousel from '~/partials/TestimonialsCarousel.vue'
import Stats from '~/partials/Stats.vue'
import NewsletterSimple from '~/partials/NewsletterSimple.vue'
import Newsletter from '~/partials/Newsletter.vue'
import FeaturesBlocks from '~/partials/FeaturesBlocks.vue'

export default {
  name: 'NewsletterPage',
  components: {
    Stats,
    FeaturesBlocks,
    TestimonialsCarousel,
    Newsletter,
    NewsletterSimple,
  },
}
</script>

<style lang="scss">
ol {
  width: 100vw;
  li {
    width: 100%;
    // width: max-content;
    word-wrap: break-word;
    word-break: break-word;

    &:hover {
      color: white;
    }
  }
}
</style>