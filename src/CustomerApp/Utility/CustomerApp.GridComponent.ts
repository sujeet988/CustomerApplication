import {Input,Output,EventEmitter, Component} from '@angular/core';

@Component({

      selector:"grid-ui",
      templateUrl:"./CustomerApp.Grid.html"
})


export class  GridComponent 
{

    gridColumns: Array<object>=new Array<object>();
    gridData: Array<object>=new Array<object>();


    @Input("grid-columns")
    set setGridColumns(_gridcolumns: Array<object>){

        this.gridColumns=_gridcolumns;

    }

     @Input("grid-data")
    set setGridData(_gridData: Array<object>){

        this.gridData=_gridData;

    }
    @Output("grid-selected")
    eventEmitter:EventEmitter<object>=new  EventEmitter<object>();

    selectGridData(_selected:object){
       this.eventEmitter.emit(_selected);

    }
    
}

