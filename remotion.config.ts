import { Config } from 'remotion';
import { webpackOverride } from './src/webpack-override';

Config.Rendering.setImageFormat('png');
Config.Output.setOverwriteOutput(true);
//Config.Rendering.setConcurrency(4);

Config.Bundling.overrideWebpackConfig(webpackOverride);
