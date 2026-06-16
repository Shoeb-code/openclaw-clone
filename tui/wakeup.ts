
import {select , isCancel} from '@clack/prompts'
import chalk from 'chalk'
import figlet from 'figlet'
import { exit } from 'node:process';
import { runCliMode } from '../modes/cli';
 
const BANNER_FONT="ANSI shadow";
const SHADOW = chalk.hex('#5b4d9e');
const FACE = chalk.hex('#e8dcf8').bold;

 function printBannerWithShadow(ascii:string){

    const bannerLines= ascii.replace(/\s+$/,"").split("\n");
    const maxLen = Math.max(...bannerLines.map((l) => l.length),0);
    const rowWidth = maxLen+2;

    for( const line of bannerLines){
        console.log(SHADOW((' '+line).padEnd(rowWidth)));
    }
    process.stdout.write(`\x1b[${bannerLines.length}]A`);

    for(const line of bannerLines){
        console.log(FACE(line.padEnd(rowWidth)));
    }
    console.log();
 }


export async function runWakeup(){
     let ascii:string;
     try {
             ascii = figlet.textSync("Fastclaw",{font:BANNER_FONT})
     } catch (error) {
        ascii = figlet.textSync("Fastclaw",{font:"standard"})
     }
     printBannerWithShadow(ascii)

     const mode = await select({
         message:" which mode you want to proceed with?",
         options:[
            {value:'cli' , label:"CLI"},
            {value:"telegram" , label:"Telegram"},
            {value:'exit', label: 'Exit'},
             
        ]
     })
     if(mode==="exit"){
        console.log(chalk.dim('\n Goodbye. \n'));
        return;
    
     }
    else if(mode==='cli'){
          await runCliMode();
     }
     else if(mode === 'telegram') {
        console.log(chalk.dim("starting telegram mode..."));
     }

}
