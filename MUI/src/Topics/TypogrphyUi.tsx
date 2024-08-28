import { TypeAction, Typography } from "@mui/material"


function TypogrphyUi() {
       return (
         <>
           {/* Headings */}
           <Typography variant="h1">H1 heading</Typography>
           <Typography variant="h2">H2 heading</Typography>
           <Typography variant="h3">H3 heading</Typography>
           <Typography variant="h4">H4 heading</Typography>
           <Typography variant="h5">H5 heading</Typography>
           <Typography variant="h6">H6 heading</Typography>
           {/* Subtitles */}
           <Typography variant="subtitle1">Suntitle1</Typography>
           <Typography variant="subtitle2">Suntitle2</Typography>
           {/* Bodys  */}
           <Typography variant="body1">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
             eaque fuga inventore cum soluta dolorum? Quo distinctio, optio
             sequi laboriosam aut beatae eveniet quam.
           </Typography>
           {/* the default is body1 */}
           {/*<Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eaque fuga inventore cum soluta dolorum? Quo distinctio, optio sequi laboriosam aut beatae eveniet quam.</Typography>*/}
           <Typography variant="body2">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
             amet quaerat deserunt vero unde perferendis ducimus facilis
             consequatur hic accusamus quo in voluptatibus beatae?
           </Typography>
           {/* you set the html  */}
           <Typography variant="h6" component={"h2"}>
             This is html (h2) but styled as MUI h6
           </Typography>{" "}
           {/* you set the html  */}
           <Typography variant="h6" component={"h2"} gutterBottom>
             the same html h2 styled as h6 but have a
             gutterButtom(margin-bottom: 0.35em = 21px)
           </Typography>
         </>
       );
}

export default TypogrphyUi
