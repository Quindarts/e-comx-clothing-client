const demoCheckString1 = async (req, res, next) => {
    console.log("🚀 ~ file: demo.middleware.js:2 ~ demoCheckString ~ req 1111111:", req)
    next()
}
const demoCheckString2 = async (req, res, next) => {
    console.log("🚀 ~ file: demo.middleware.js:2 ~ demoCheckString ~ req 22222222:", req)
    next()
}
(module).exports  = {demoCheckString1,demoCheckString2};