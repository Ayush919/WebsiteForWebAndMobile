import {Box} from "@mui/material";
const DataBox = ({imageUrl,title,content})=>{
    return(
        <Box className="boxBlock">
            <div className="boxItems">
                <img src={imageUrl} alt={title} width={60} height={60}/>
            </div>
            <div className={"boxItemsName"}>{title}</div>
            <div className={"underLine"}></div>
            <div className="boxContent">{content}</div>

        </Box>
    )
}
export default DataBox;