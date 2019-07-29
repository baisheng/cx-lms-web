// plugins/apollo-error-handler.js
export default (error, context) => {
  console.log(error)
    // console.log('%cError', 'background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;', error.message)
  context.error({ statusCode: 304, message: 'Server error' })
}
