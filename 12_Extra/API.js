

// api for post request
exports.getdata= async (req,res)=>{
    try{
        const {name,email,password}=req.body;
        if(!name || !email || !password){
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            })
        }
        const data=new Data({
            name,email,password
        });
        await data.save();
        return res.status(200).json({
            success:true,
            message:"Data saved successfully",
        })
    }
    catch(err){
        return res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}


// api for get request
exports.getalldata= async (req,res)=>{
    try{
        const data=await login.find();
        return res.status(200).json({
            success:true,
            data
        })
    }
    catch(err){
        return res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}


// api for fetching data by id
exports.getdatabyid= async (req,res)=>{
    try{
        const {id}=req.params;
        const data=await login.findById(id);
        if(!data){
            return res.status(404).json({
                success:false,
                message:"Data not found"
            })
        }
        return res.status(200).json({
            success:true,
            data
        })
    }
    catch(err){
        return res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}


// api for updating data by id
exports.updatedatabyid= async (req,res)=>{
    try{
        const {id}=req.params;
    const{name,email,password}=req.body;
    const updatedata= await login.findByIdAndUpdate(
        id,
        {name,email,password},
        {new:true}
    )
    if(!updatedata){
        return res.status(400).json({
            success:false,
            message:"data not found"
        })
    }
    return res.status(200).json({
        success:true,
        data:updatedata
    })
    }
    catch(err){
        return res.status(500).json({
            success:false,
            message:"server error"
        })
    }
}


const deletedata=async(req,res)=>{
    try{
        const {id}=req.params;
        const data=await user.findByIdAndDelete(id);
        return res.status(200).json({
            message,
            data
        })
    }catch(error)
    {
        return res.status(200).json({
            message:false,
            error:res.error
        })
    }
}