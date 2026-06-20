//----------Imported to middleware/generateTokon-----------
const generateTokon = require("../middleware/generateTokon");
const User = require("./user.model");

//-----------Regiter-------Controller---------
const userRegistration = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = new User({ username, email, password })
        await user.save()

        res.status(201).send({
            message: "User Registation Successfull...!"
        })
    } catch (error) {
        console.log("Error registering a user : ", error);
        res.status(500).send({
            message: "Registation Faild...!"
        })
    }
}


//-----------Login--------Controller---------
const userLoggendIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email })
        //--------Founded not user---------
        if (!user) {
            return res.status(404).send({
                message: "User Not Found...!"
            })
        }
        //----------registation pass and Login pass matching-------
        const isPasswordmatch = await user.comparePassword(password)
        if (!isPasswordmatch) {
            return res.status(401).send({
                message: "In valide Passed...!"
            })
        }
        //---------Verefy tokon---------
        const tokon = await generateTokon(user._id)

        //----------Set Tokon in Browser Cookie
        res.cookie('token', tokon, {
            httpOnly: true, //--- 
            secure: true,
            sameSite: "none"
        })
        res.status(201).send({
            message: "User Login Successfull!",
            tokon,
            user: {
                _id: user._id,
                username: user.username,
                email: user.email,
                role: user.role,
                profileImage: user.profileImage,
                bio: user.bio,
                profession: user.profession
            }

        })
    } catch (error) {
        console.log("Error registering a user : ", error);
        res.status(500).send({
            message: "Login Faild...!"
        })
    }
}



//-----------Export-------Controler--------
module.exports = {
    userRegistration,
    userLoggendIn
}