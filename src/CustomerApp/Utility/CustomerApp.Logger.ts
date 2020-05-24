 export interface ILogger
{

    Log();


}

export class BaseLogger implements ILogger{
 Log(){

 }

}

export class ConsoleLogger extends BaseLogger{
    Log()
    {

        console.log("this is console logger");
    }
}

export class DbLogger extends BaseLogger{
    Log()
    {
        console.log("this i.s db logger");

    }


}