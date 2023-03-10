// in thid file we are putting up all the routers
const express=require("express");
const uuid=require("uuid");
const router=express.Router();
const members=require("../../Members");
// if we are using router in the same file we use app. but if we are using it from the other file in that case we use
// router.
// since we already have the router in the index file so we can replace
// "/api/members" with "/"
router.get("/",(req,res)=>{
    res.json(members);
});

// suppose we want to access one member from the member file

router.get("/:id",(req,res)=>
{
    // if we are searching an id that is not present
    const found=members.some(member=>member.id===parseInt(req.params.id));

    if(found)
    {
    res.json(members.filter(members=>members.id===parseInt(req.params.id)));
}
else{
    res.status(400).json({msg:`No member with the ID of ${req.params.id} `});
}
});

//create member
// whenever we create something on the server or we are adding to database
// so for that we do POST request
router.post("/",(req,res)=>{
    const newMember={
        id:uuid.v4(),
        name:req.body.name,
        email:req.body.email,
        status:"active"
    }
    if(!newMember.name||!newMember.email){
       return res.status(400).json({msg:"please include a name and email"})
    }
members.push(newMember);
res.json(members);
});
module.exports=router;