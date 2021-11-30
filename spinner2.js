process.stdout.write('hello from spinner1.js... \rheyyy\n');
const sentence2 = "|/-\|"
let final = 0
for (const char of sentence2){
  setTimeout(() => {
    process.stdout.write("\r" + char);
  }, final += 300);
}