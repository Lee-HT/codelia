import { api } from "API";
import { useCallback } from "react";

export default function useCommentDelete(){
    const handleComment = useCallback(async (cid) => {
        try{
            const response = await api.delete("/comment/" + cid);
            if (response.status === 204) {
            }
        } catch(error){
            console.log(error);
        }
    },[]);

    return handleComment;
}