import Solver from "./analysis/solver";
import {expand} from "./misc/files";
import {analyzeFiles} from "./analysis/analyzer";
import {FragmentState} from "./analysis/fragmentstate"
import {AnalysisStateReporter} from "./output/analysisstatereporter";
import {VisualizerGraphs, getVisualizerCallGraph} from "./output/visualizer";

export { Solver, expand, analyzeFiles, AnalysisStateReporter, getVisualizerCallGraph, VisualizerGraphs, FragmentState};


export function sayHello(name: string): string {
    return `Hello, ${name}!`;
  }