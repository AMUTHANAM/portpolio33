import { Label } from "@mui/icons-material";

export function Skills() {
  return (

    <>
      <div>
        <h3>skills</h3>

        <form className='latag'>
          <h4 className='fend'>Front end</h4>

          <lable type="file">Javascript</lable>
          <progress id="file" value="50" max="100" >50%</progress>  <br></br>

          <label type="file">HTML</label>
          <progress id="file" value="50" max="100">50%</progress> <br></br>

          <label type="file">CSS</label>
          <progress id="file" value="50" max="100">50%</progress> <br></br>

          <label type="file">Bootstap</label>
          <progress id="file" value="50" max="100">50%</progress>  <br></br>

          <lable type="file">React</lable>
          <progress id= "file" value="50" max="100" >50</progress> <br></br>


          <lable typr="file">MUI</lable>
          <progress id="file" value="50" max="100">50% </progress> <br></br>



        </form>
      </div>

      <div>


        <form className='latag'>
          <h4 className='fend'>Back end</h4>

          <label type="file">Mongodb</label>
          <progress id="file" value="50" max="100">50%</progress> <br></br>

          <label type="file">Nodejs</label>
          <progress id="file" value="50" max="100">50%</progress> <br></br>

          <lable typr="file">SQL</lable>
          <progress id="file" value="50" max="100">50% </progress> <br></br>

          <lable for="file">Mysql</lable>
          <progress id="file" value="50" max="100">50%</progress> <br></br> 

          <lable type="file">Aws</lable>
          <progress id="file" value="50" max="100">50%</progress> <br></br>

        </form>
      </div>
    </>
  );
}
