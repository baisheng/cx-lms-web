<template>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
      <defs>
        <symbol id="feather-check-circle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </symbol>

        <symbol id="testimonial-quotemark" viewBox="0 0 100 125" fill="currentColor">
          <path
            d="M5,49.898h24.839C29.646,63.563,18.637,74.65,5,74.958v14.163c21.447-0.31,38.816-17.748,39.011-39.223h0.01v-0.361V10.879  H5V49.898z"></path>
          <path
            d="M55.98,10.879v39.02h24.839C80.625,63.563,69.617,74.65,55.98,74.958v14.163c21.447-0.31,38.816-17.748,39.011-39.223H95  v-0.361V10.879H55.98z"></path>
        </symbol>

        <symbol id="feather-chevron-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </symbol>

        <symbol id="feather-x-circle" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="15" y1="9" x2="9" y2="15"></line>
          <line x1="9" y1="9" x2="15" y2="15"></line>
        </symbol>

      </defs>
    </svg>
    <div class="text-center w-full my-8">
      <a href="/">
        <img src="/images/icon/plausible_logo-973ea42fac38d21a0a8cda9cfb9231c9.png?vsn=d" style="height: 2.5rem;"> </a>
    </div>

    <form accept-charset="UTF-8" action="/register"
          class="max-w-sm w-full mx-auto bg-white shadow-md rounded px-8 py-6 mb-4 mt-8" method="post"><input
      name="_csrf_token" type="hidden" value="BXsVTXAgMRt4Lhg5By19fBM/Hh80NgAAN/qyDMKHKmqvwu8Mblv4WQ=="><input
      name="_utf8" type="hidden" value="✓">
      <div class="flex items-center justify-between">
        <h2>Enter your details to get started</h2>
      </div>
      <div class="my-4 mt-8">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="user_name">Full name</label> <input
        class="transition bg-grey-lighter appearance-none border border-transparent rounded w-full p-2 text-grey-darker leading-normal appearance-none focus:outline-none focus:bg-white focus:border-grey-light"
        id="user_name" name="user[name]" placeholder="Jane Doe" type="text">
      </div>
      <div class="my-4">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="user_email">Email</label>
        <p class="text-grey-dark text-xs mt-1 mb-2">No spam, guaranteed.</p>
        <input
          class="transition bg-grey-lighter appearance-none border border-transparent rounded w-full p-2 text-grey-darker leading-normal appearance-none focus:outline-none focus:bg-white focus:border-grey-light"
          id="user_email" name="user[email]" placeholder="example@email.com" type="email">
      </div>
      <button class="button mt-4 w-full" type="submit">Send activation link →</button>
      <p class="text-center text-grey-dark text-xs mt-4">
        Already have an account? <a href="/login">Log in</a> instead.
      </p>
    </form>
    <p class="text-center text-grey text-xs mt-4">
      ©2019 Plausible Insights. All rights reserved.
    </p>
  </div>

</template>
<script>
  export default {
    head() {
      return {
        bodyAttrs: {
          class: 'flex flex-col h-full bg-grey-lightest'
        }
      }
    }
  }
</script>
