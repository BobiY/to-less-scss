// 将最终的结果字符串输出到控制台
import chalk from "chalk";
export default string => {
  console.log(chalk.magenta('result start ~~~~~~~~~'));
  console.log('\n');
  console.log(chalk.yellow(string))
  console.log('\n');
  console.log(chalk.magenta('resut end ~~~~~~~~~~~~'));
}