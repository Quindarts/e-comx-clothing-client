
const Demo = require("../models/demo")

const createDemo = async (req, res) => {
    let data = new Demo({   
        firstName: req.body.firstName,
        lastName: req.body.lastName
    });
    let result = await data.save();
    res.status(200).send({ mssg: "cearted!!", result })
}
(module).exports = createDemo;