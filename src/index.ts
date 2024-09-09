import Solver from "./analysis/solver";
import {expand} from "./misc/files";
import {analyzeFiles} from "./analysis/analyzer";
import {FragmentState} from "./analysis/fragmentstate"
import {AnalysisStateReporter} from "./output/analysisstatereporter";
import {VisualizerGraphs, getVisualizerCallGraph} from "./output/visualizer";
import {FunctionInfo, ModuleInfo, PackageInfo} from "./analysis/infos";
import {locationToString} from "./misc/util";
import {funcToStringWithCode} from "./output/tostringwithcode";

export { Solver, 
  expand, 
  analyzeFiles, 
  AnalysisStateReporter, 
  getVisualizerCallGraph, 
  VisualizerGraphs, 
  FragmentState,
  FunctionInfo,
  ModuleInfo,
  PackageInfo,
  locationToString,
  funcToStringWithCode
};


export function sayHello(name: string): string {
    return `Hello, ${name}!`;
  }