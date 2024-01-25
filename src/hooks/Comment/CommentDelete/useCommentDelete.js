import { api } from "API";
import { useCallback } from "react";

export default function useCommentDelete(addTotalElements){
    const handleComment = useCallback(async (cid) => {
        try{
            const response = await api.delete("/comment/" + cid);
            if (response.status === 204) {
                console.log("no-content");
                addTotalElements(-1);
            }
        } catch(error){
            console.log(error);
        }
        
    },[addTotalElements]);

    return handleComment;
}