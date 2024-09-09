import Solver from "./analysis/solver";
import {expand} from "./misc/files";
import {analyzeFiles} from "./analysis/analyzer";
import {AnalysisStateReporter} from "./output/analysisstatereporter";
import {VisualizerGraphs, getVisualizerCallGraph} from "./output/visualizer";

export { Solver, expand, analyzeFiles, AnalysisStateReporter, getVisualizerCallGraph, VisualizerGraphs};


export function sayHello(name: string): string {
    return `Hello, ${name}!`;
  }