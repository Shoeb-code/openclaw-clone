
import { select,isCancel } from "@clack/prompts";
import chalk from "chalk";


export const runCliMode= async ()=>{
    while(true){
       const mode = await select({
            message:"Choose Cli sub-mode",
            options:[
                {value:"agent", label:"Agent Mode"},
                { value:"plan", label:"Plan Mode"},
                {value:"ask", label:"Ask Mode"},
                {value:"back", label:"<- Back to main menu"}
            ]  
       });
       if(isCancel(mode) || mode === "back"){
             return;
       }
       if(mode === 'agent'){
        console.log("agent...");
       }
       if(mode==='ask'){
        console.log("ask...");
       }
       if(mode==='plan'){
        console.log('plan');
       }
       if(mode !=='agent'  && mode!== 'ask'  && mode!== "plan"){
        console.log(chalk.yellow("\n That mode is  not implemented yet. \n"))
       }
    }
} 