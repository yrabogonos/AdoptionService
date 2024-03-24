import { toast } from 'react-toastify';


export const CustomToaster = async (request:Promise<any>)=>{
    return toast.promise(
        request,
        {
          pending: {
            render(){
              return "Proccessing..."
            },
        
          },
          success: {
            render(succ: any){
                console.log('!', succ.data)
              if(succ.data.statusText === 'OK'){
                localStorage.setItem("jwt", succ.data.data.token);
                
                return `Success !`
               
              }
            },
            theme: "colored"
          },
          error: {
            render(err: any){
              const errorText = err.data.response.data.errors[0].msg;
              if(err.data.response.data.errors.length > 0){
                return `${errorText}`
            
              }
              else{
                return `An error occurred while processing your request.`
              }
            },
            theme: "colored",
               
          }
        }
    )    
}

export const CustomLoginToaster = async (request:Promise<any>)=>{
  return toast.promise(
      request,
      {
        pending: {
          render(){
            return "Proccessing..."
          },
      
        },
        success: {
          render(succ: any){
              console.log('!', succ.data)
            if(succ.data.statusText === 'OK'){
              localStorage.setItem("jwt", succ.data.data.token);
              
              return `Success !`
             
            }
            
          },
          theme: "colored"
        },
        error: {
          render(err: any){
     
            return `${err.data.response.data.msg}`

          }
          
          ,
          theme: "colored",
             
        }
      }
  )    
}