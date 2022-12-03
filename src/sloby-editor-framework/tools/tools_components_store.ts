import TextCreationTool from './text-creator'
import TestTool from './test_tool'
import TextCreationToolC from '../implementations/SlobyTools/TextCreationToolC'
/**
 * Creating a store for the tools, and that's gonna be the reference of deciding whether or not the tool identifire is valid
 */
export const SlobyToolsStore: any = {
  TextCreationTool,
  TestTool,
}

export const SlobyComponentStore = {}