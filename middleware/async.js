const asyncWrapper = (callback) => {
    return async (req,res,next)=>{
        try {
            await callback(req, res, next)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = asyncWrapper

//el file da 3shan ne2lel el redundency fel controller 
//tyb e7na katbeen async func fel controller feeha try w ben3ml await
//lel response we lw fi error bendeeha noo3 el error el mo3ayan 3la 7asab 3ayzeen ne3ml a
// el file da lel async kolaha le7ad ma beywsl lel error 
// hane3ml lel errors file tani 3shan howa el 7aga el betet3'ayar
