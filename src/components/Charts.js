import React from 'react'
import ScriptTag from 'react-script-tag';
import MultiType from './MultiType.js'
import {IoBarChartSharp} from "react-icons/io5";
import {BiExpandAlt} from "react-icons/bi";

export default function Charts() {
    return (
        <div className="row">
            <div className="col-md-12">
                {/* BEGIN ROW */}
                <div className="row">
                    <div className="col-md-12">
                        {/* BEGIN CHART PORTLET*/}
                        <div className="portlet light bordered mt-5 pt-5">
                            <div className="portlet-title">
                                <div className="caption">
                                    <IoBarChartSharp />
                                    <span className="caption-subject bold uppercase font-green-haze"> Bar Charts</span>
                                </div>
                                <div className="tools">
                                    <a href="javascript:;" className="collapse"> </a>
                                    <a href="#portlet-config" data-toggle="modal" className="config"> </a>
                                    <a href="javascript:;" className="reload"> </a>
                                    <a href="javascript:;"><BiExpandAlt /> </a>
                                    <a href="javascript:;" className="remove"> </a>
                                </div>
                            </div>
                            <div className="portlet-body">
                                <div id="chart_1" className="chart" style={{ height: '350px'}}> 
                                    <MultiType/>
                                 </div>
                            </div>
                        </div>
                        {/* END CHART PORTLET*/}
                    </div>
                </div>
            </div>
        </div>

    )
}
