import { Transform, ReadableOptions, WritableOptions } from "stream";


class TextTransformation  extends Transform  {

    constructor(opts?: ReadableOptions | WritableOptions) {
        super(opts);
    }

    _transform(data: String, encoding: String, callback: Function) : void {
           const output = this.reverseString(data.toString());
           callback("", `${output}\n\n`);
    }
    
    private reverseString(data : String) {
        const splitString: String[] = data.split('');
        const tranformed = splitString.reverse().join('')
        return tranformed
        
    }

}

const {stdin, stdout} =  process;
stdin.setDefaultEncoding("utf-8");

stdin.pipe( new TextTransformation({ objectMode : true }))
    .pipe(stdout);