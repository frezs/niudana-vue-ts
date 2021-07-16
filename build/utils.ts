import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

/**
 * 
 * @param mode 
 * @returns 
 * @description 开发环境？
 */
export function isDevFn(mode: string): boolean {
  return mode === 'development' || mode === 'dev';
}

/**
 * 
 * @param mode 
 * @returns 
 * @description 生产环境？
 */

export function isProdFn(mode: string): boolean {
  return mode === 'production' || mode === 'prod';
}

/**
 * @description 是否生成包报告
 */
export function isReportMode(): boolean {
  return process.env.REPORT === 'true';
}

/**
 * 
 * @param envConf 
 * @returns 
 * @description 读取所有环境变量配置文件到process.env
 */
export function wrapperEnv(envConf: Record<string, any>): ViteEnv {
  const ret: any = {};

  for (const envName of Object.keys(envConf)) {
    let realName = envConf[envName].replace(/\\n/g, '\n');
    realName = realName === 'true' ? true : realName === 'false' ? false : realName;

    if (envName === 'VITE_PORT') {
      realName = Number(realName);
    }
    if (envName === 'VITE_PROXY') {
      try {
        realName = JSON.parse(realName);
      } catch (error) { }
    }
    ret[envName] = realName;
    process.env[envName] = realName;
  }
  return ret;
}

/**
 * @description 获取当前环境下生效的配置文件名
 */
function getConfFiles() {
  const script = process.env.npm_lifecycle_script;
  const reg = new RegExp('--mode ([a-z]+) ');
  const result = reg.exec(script as string) as any;
  if (result) {
    const mode = result[1] as string;
    return ['.env', `.env.${mode}`];
  }
  return ['.env', '.env.production'];
}

/**
 * 从环境变量中，提取带前缀的变量
 * @param match 前缀
 * @param confFiles 配置文件
 * @returns {} 
 */
export function getEnvConfig(match: string = 'VITE_GLOB_', confFiles: string[] = getConfFiles()) {
  let envConfig = {};
  confFiles.forEach((item) => {
    try {
      const env = dotenv.parse(fs.readFileSync(path.resolve(process.cwd(), item)));
      envConfig = { ...envConfig, ...env };
    } catch (e) {
      console.error(`Error in parsing ${item}`, e);
    }
  });
  const reg = new RegExp(`^(${match})`);
  Object.keys(envConfig).forEach((key) => {
    if (!reg.test(key)) {
      Reflect.deleteProperty(envConfig, key);
    }
  });
  return envConfig;
}

/**
 * 获取根目录
 * @param dir 目录路径
 */
export function getRootPath(...dir: string[]) {
  return path.resolve(process.cwd(), ...dir);
}
