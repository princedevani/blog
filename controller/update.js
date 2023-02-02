const User=require('../model/blogschema');
exports.updateuser= async (req, res) => {
        const userdata = req.body;
        try {
          let user = await User.findById(req.params.id);
          if (!user) {
            throw new Error("id is not valid");
          }
          user = await User.findByIdAndUpdate(req.params.id, userdata);
          console.log(userdata);
          res.status(200).send(userdata)
        } catch (error) {
          console.error(error.message);
          res.status(500).send(error.message);
        }
      }
         