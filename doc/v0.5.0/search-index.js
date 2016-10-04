var searchIndex = {};
searchIndex["log4rs"] = {"doc":"log4rs is a highly configurable logging framework modeled after Java&#39;s\nLogback and log4j libraries.","items":[[3,"Handle","log4rs","A handle to the active logger.",null,null],[4,"Error","","An error initializing the logging framework from a file.",null,null],[13,"Log","","An error from the log crate",0,null],[13,"Log4rs","","A fatal error initializing the log4rs config.",0,null],[5,"init_file","","Initializes the global logger as a log4rs logger configured via a file.",null,{"inputs":[{"name":"p"},{"name":"deserializers"}],"output":{"name":"result"}}],[5,"init_config","","Initializes the global logger as a log4rs logger with the provided config.",null,{"inputs":[{"name":"config"}],"output":{"name":"result"}}],[0,"append","","Appenders",null,null],[0,"file","log4rs::append","The file appender.",null,null],[3,"FileAppenderConfig","log4rs::append::file","The file appender&#39;s configuration.",null,null],[3,"FileAppender","","An appender which logs to a file.",null,null],[3,"FileAppenderBuilder","","A builder for `FileAppender`s.",null,null],[3,"FileAppenderDeserializer","","A deserializer for the `FileAppender`.",null,null],[11,"fmt","","",1,null],[11,"append","","",1,null],[11,"builder","","Creates a new `FileAppender` builder.",1,{"inputs":[],"output":{"name":"fileappenderbuilder"}}],[11,"encoder","","Sets the output encoder for the `FileAppender`.",2,null],[11,"append","","Determines if the appender will append to or truncate the output file.",2,null],[11,"build","","Consumes the `FileAppenderBuilder`, producing a `FileAppender`.",2,null],[11,"deserialize","","",3,null],[0,"console","log4rs::append","The console appender.",null,null],[3,"ConsoleAppenderConfig","log4rs::append::console","The console appender&#39;s configuration.",null,null],[3,"ConsoleAppender","","An appender which logs to standard out.",null,null],[3,"ConsoleAppenderBuilder","","A builder for `ConsoleAppender`s.",null,null],[3,"ConsoleAppenderDeserializer","","A deserializer for the `ConsoleAppender`.",null,null],[11,"fmt","","",4,null],[11,"append","","",4,null],[11,"builder","","Creates a new `ConsoleAppender` builder.",4,{"inputs":[],"output":{"name":"consoleappenderbuilder"}}],[11,"encoder","","Sets the output encoder for the `ConsoleAppender`.",5,null],[11,"build","","Consumes the `ConsoleAppenderBuilder`, producing a `ConsoleAppender`.",5,null],[11,"deserialize","","",6,null],[0,"rolling_file","log4rs::append","A rolling file appender.",null,null],[3,"RollingFileAppenderConfig","log4rs::append::rolling_file","Configuration for the rolling file appender.",null,null],[3,"LogFile","","Information about the active log file.",null,null],[3,"RollingFileAppender","","An appender which archives log files in a configurable strategy.",null,null],[3,"RollingFileAppenderBuilder","","A builder for the `RollingFileAppender`.",null,null],[3,"RollingFileAppenderDeserializer","","A deserializer for the `RollingFileAppender`.",null,null],[0,"policy","","Policies.",null,null],[0,"compound","log4rs::append::rolling_file::policy","The compound rolling policy.",null,null],[3,"CompoundPolicyConfig","log4rs::append::rolling_file::policy::compound","Configuration for the compound policy.",null,null],[3,"CompoundPolicy","","A rolling policy which delegates to a &quot;trigger&quot; and &quot;roller&quot;.",null,null],[3,"CompoundPolicyDeserializer","","A deserializer for the `CompoundPolicyDeserializer`.",null,null],[0,"roll","","Rollers",null,null],[0,"delete","log4rs::append::rolling_file::policy::compound::roll","The delete roller.",null,null],[3,"DeleteRollerConfig","log4rs::append::rolling_file::policy::compound::roll::delete","Configuration for the delete roller.",null,null],[3,"DeleteRoller","","A roller which deletes the log file.",null,null],[3,"DeleteRollerDeserializer","","A deserializer for the `DeleteRoller`.",null,null],[11,"fmt","","",7,null],[11,"roll","","",7,null],[11,"new","","Returns a new `DeleteRoller`.",7,{"inputs":[],"output":{"name":"deleteroller"}}],[11,"deserialize","","",8,null],[0,"fixed_window","log4rs::append::rolling_file::policy::compound::roll","The fixed-window roller.",null,null],[3,"FixedWindowRollerConfig","log4rs::append::rolling_file::policy::compound::roll::fixed_window","Configuration for the fixed window roller.",null,null],[3,"FixedWindowRoller","","A roller which maintains a fixed window of archived log files.",null,null],[3,"FixedWindowRollerBuilder","","A builder for the `FixedWindowRoller`.",null,null],[3,"FixedWindowRollerDeserializer","","A deserializer for the `FixedWindowRoller`.",null,null],[11,"fmt","","",9,null],[11,"builder","","Returns a new builder for the `FixedWindowRoller`.",9,{"inputs":[],"output":{"name":"fixedwindowrollerbuilder"}}],[11,"roll","","",9,null],[11,"base","","Sets the base index for archived log files.",10,null],[11,"build","","Constructs a new `FixedWindowRoller`.",10,null],[11,"deserialize","","",11,null],[8,"Roll","log4rs::append::rolling_file::policy::compound::roll","A trait which processes log files after they have been rolled over.",null,null],[10,"roll","","Processes the log file.",12,null],[11,"name","","",12,{"inputs":[],"output":{"name":"str"}}],[0,"trigger","log4rs::append::rolling_file::policy::compound","Triggers",null,null],[0,"size","log4rs::append::rolling_file::policy::compound::trigger","The size trigger.",null,null],[3,"SizeTriggerConfig","log4rs::append::rolling_file::policy::compound::trigger::size","Configuration for the size trigger.",null,null],[3,"SizeTrigger","","A trigger which rolls the log once it has passed a certain size.",null,null],[3,"SizeTriggerDeserializer","","A deserializer for the `SizeTrigger`.",null,null],[11,"fmt","","",13,null],[11,"new","","Returns a new trigger which rolls the log once it has passed the\nspecified size in bytes.",13,{"inputs":[{"name":"u64"}],"output":{"name":"sizetrigger"}}],[11,"trigger","","",13,null],[11,"deserialize","","",14,null],[8,"Trigger","log4rs::append::rolling_file::policy::compound::trigger","A trait which identifies if the active log file should be rolled over.",null,null],[10,"trigger","","Determines if the active log file should be rolled over.",15,null],[11,"name","","",15,{"inputs":[],"output":{"name":"str"}}],[11,"fmt","log4rs::append::rolling_file::policy::compound","",16,null],[11,"new","","Creates a new `CompoundPolicy`.",16,{"inputs":[{"name":"box"},{"name":"box"}],"output":{"name":"compoundpolicy"}}],[11,"process","","",16,null],[11,"deserialize","","",17,null],[8,"Policy","log4rs::append::rolling_file::policy","A trait implementing a rolling policy for a `RollingFileAppender`.",null,null],[10,"process","","Rolls the current log file, if necessary.",18,null],[11,"name","","",18,{"inputs":[],"output":{"name":"str"}}],[11,"path","log4rs::append::rolling_file","Returns the path to the log file.",19,null],[11,"len","","Returns an estimate of the log file&#39;s current size.",19,null],[11,"roll","","Triggers the log file to roll over.",19,null],[11,"fmt","","",20,null],[11,"append","","",20,null],[11,"builder","","Creates a new `RollingFileAppenderBuilder`.",20,{"inputs":[],"output":{"name":"rollingfileappenderbuilder"}}],[11,"append","","Determines if the appender will append to or truncate the log file.",21,null],[11,"encoder","","Sets the encoder used by the appender.",21,null],[11,"build","","Constructs a `RollingFileAppender`.",21,null],[11,"deserialize","","",22,null],[8,"Append","log4rs::append","A trait implemented by log4rs appenders.",null,null],[10,"append","","Processes the provided `LogRecord`.",23,null],[11,"name","","",23,{"inputs":[],"output":{"name":"str"}}],[0,"config","log4rs","log4rs configuration",null,null],[3,"Root","log4rs::config","Configuration for the root logger.",null,null],[3,"RootBuilder","","A builder for `Root`s.",null,null],[3,"Appender","","Configuration for an appender.",null,null],[3,"AppenderBuilder","","A builder for `Appender`s.",null,null],[3,"Logger","","Configuration for a logger.",null,null],[3,"LoggerBuilder","","A builder for `Logger`s.",null,null],[3,"Config","","A log4rs configuration.",null,null],[3,"ConfigBuilder","","A builder for `Config`s.",null,null],[3,"Errors","","Errors encountered when validating a log4rs `Config`.",null,null],[4,"Error","","An error validating a log4rs `Config`.",null,null],[13,"DuplicateAppenderName","","Multiple appenders were registered with the same name.",24,null],[13,"NonexistentAppender","","A reference to a nonexistant appender.",24,null],[13,"DuplicateLoggerName","","Multiple loggers were registered with the same name.",24,null],[13,"InvalidLoggerName","","A logger name was invalid.",24,null],[11,"fmt","","",25,null],[11,"builder","","Creates a new `RootBuilder` with no appenders.",25,{"inputs":[],"output":{"name":"rootbuilder"}}],[11,"level","","Returns the minimum level of log messages that the root logger will accept.",25,null],[11,"appenders","","Returns the list of names of appenders that will be attached to the root logger.",25,null],[11,"fmt","","",26,null],[11,"appender","","Adds an appender.",26,null],[11,"appenders","","Adds appenders.",26,null],[11,"build","","Consumes the `RootBuilder`, returning the `Root`.",26,null],[11,"fmt","","",27,null],[11,"builder","","Creates a new `AppenderBuilder` with the specified name and `Append` trait object.",27,{"inputs":[],"output":{"name":"appenderbuilder"}}],[11,"name","","Returns the name of the appender.",27,null],[11,"appender","","Returns the appender.",27,null],[11,"filters","","Returns the filters attached to the appender.",27,null],[11,"fmt","","",28,null],[11,"filter","","Adds a filter.",28,null],[11,"filters","","Adds filters.",28,null],[11,"build","","Consumes the `AppenderBuilder`, returning the `Appender`.",28,null],[11,"fmt","","",29,null],[11,"builder","","Creates a new `LoggerBuilder` with the specified name and level.",29,{"inputs":[],"output":{"name":"loggerbuilder"}}],[11,"name","","Returns the name of the logger.",29,null],[11,"level","","Returns the minimum level of log messages that the logger will accept.",29,null],[11,"appenders","","Returns the list of names of appenders that will be attached to the logger.",29,null],[11,"additive","","Determines if appenders of parent loggers will also be attached to this logger.",29,null],[11,"fmt","","",30,null],[11,"appender","","Adds an appender.",30,null],[11,"appenders","","Adds appenders.",30,null],[11,"additive","","Sets the additivity of the logger.",30,null],[11,"build","","Consumes the `LoggerBuilder`, returning the `Logger`.",30,null],[11,"fmt","","",31,null],[11,"builder","","Creates a new `ConfigBuilder`.",31,{"inputs":[],"output":{"name":"configbuilder"}}],[11,"appenders","","Returns the `Appender`s associated with the `Config`.",31,null],[11,"root","","Returns the `Root` associated with the `Config`.",31,null],[11,"loggers","","Returns the `Logger`s associated with the `Config`.",31,null],[11,"appender","","Adds an appender.",32,null],[11,"appenders","","Adds appenders.",32,null],[11,"logger","","Adds a logger.",32,null],[11,"loggers","","Adds loggers.",32,null],[11,"build_lossy","","Consumes the `ConfigBuilder`, returning the `Config`.",32,null],[11,"build","","Consumes the `ConfigBuilder`, returning the `Config`.",32,null],[11,"fmt","","",33,null],[11,"errors","","Returns a slice of `Error`s.",33,null],[11,"fmt","","",33,null],[11,"description","","",33,null],[11,"fmt","","",24,null],[11,"fmt","","",24,null],[11,"description","","",24,null],[0,"filter","log4rs","Filters",null,null],[3,"FilterConfig","log4rs::filter","Configuration for a filter.",null,null],[12,"kind","","The filter kind.",34,null],[12,"config","","The filter configuration.",34,null],[4,"Response","","The response returned by a filter.",null,null],[13,"Accept","","Accept the log event.",35,null],[13,"Neutral","","Take no action on the log event.",35,null],[13,"Reject","","Reject the log event.",35,null],[0,"threshold","","The threshold filter.",null,null],[3,"ThresholdFilterConfig","log4rs::filter::threshold","The threshold filter&#39;s configuration.",null,null],[3,"ThresholdFilter","","A filter that rejects all events at a level below a provided threshold.",null,null],[3,"ThresholdFilterDeserializer","","A deserializer for the `ThresholdFilter`.",null,null],[11,"fmt","","",36,null],[11,"new","","Creates a new `ThresholdFilter` with the specified threshold.",36,{"inputs":[{"name":"loglevelfilter"}],"output":{"name":"thresholdfilter"}}],[11,"filter","","",36,null],[11,"deserialize","","",37,null],[8,"Filter","log4rs::filter","The trait implemented by log4rs filters.",null,null],[10,"filter","","Filters a log event.",38,null],[11,"name","","",38,{"inputs":[],"output":{"name":"str"}}],[11,"fmt","","",34,null],[11,"eq","","",34,null],[11,"ne","","",34,null],[11,"deserialize","","",34,{"inputs":[{"name":"d"}],"output":{"name":"result"}}],[0,"file","log4rs","Support for log4rs configuration from files.",null,null],[3,"Deserializers","log4rs::file","A container of `Deserialize`rs.",null,null],[3,"Config","","A deserialized log4rs configuration file.",null,null],[4,"Error","","An error returned when deserializing a configuration into a log4rs `Config`.",null,null],[13,"Deserialization","","An error deserializing a component.",39,null],[13,"Config","","An error creating the log4rs `Config`.",39,null],[4,"Format","","Specifies the format of a configuration file.",null,null],[13,"Yaml","","YAML.",40,null],[13,"Json","","JSON.",40,null],[13,"Toml","","TOML.",40,null],[8,"Deserializable","","A trait implemented by traits which are deserializable.",null,null],[10,"name","","Returns a name for objects implementing the trait suitable for display in error messages.",41,{"inputs":[],"output":{"name":"str"}}],[8,"Deserialize","","A trait for objects that can deserialize log4rs components out of a config.",null,null],[16,"Trait","","The trait that this deserializer will create.",42,null],[16,"Config","","This deserializer&#39;s configuration.",42,null],[10,"deserialize","","Create a new trait object based on the provided config.",42,null],[11,"default","","",43,{"inputs":[],"output":{"name":"deserializers"}}],[11,"new","","Creates a new `Deserializers` with no mappings.",43,{"inputs":[],"output":{"name":"deserializers"}}],[11,"insert","","Adds a mapping from the specified `kind` to a deserializer.",43,null],[11,"deserialize","","Deserializes a value of a specific type and kind.",43,null],[11,"fmt","","",39,null],[11,"fmt","","",39,null],[11,"description","","",39,null],[11,"cause","","",39,null],[11,"clone","","",40,null],[11,"parse","","Creates a log4rs `Config` from the specified config string and `Deserializers`.",44,{"inputs":[{"name":"str"},{"name":"format"},{"name":"deserializers"}],"output":{"name":"result"}}],[11,"refresh_rate","","Returns the requested refresh rate.",44,null],[11,"into_config","","Returns the log4rs `Config`.",44,null],[11,"errors","","Returns any nonfatal errors encountered when deserializing the config.",44,null],[0,"encode","log4rs","Encoders",null,null],[3,"EncoderConfig","log4rs::encode","Configuration for an encoder.",null,null],[12,"kind","","The encoder&#39;s kind.",45,null],[12,"config","","The encoder&#39;s configuration.",45,null],[3,"Style","","The style applied to text output.",null,null],[12,"text","","The text (or foreground) color.",46,null],[12,"background","","The background color.",46,null],[12,"intense","","True if the text should have increased intensity.",46,null],[4,"Color","","A text or background color.",null,null],[13,"Black","","",47,null],[13,"Red","","",47,null],[13,"Green","","",47,null],[13,"Yellow","","",47,null],[13,"Blue","","",47,null],[13,"Magenta","","",47,null],[13,"Cyan","","",47,null],[13,"White","","",47,null],[0,"json","","An encoder which writes a JSON object.",null,null],[3,"JsonEncoderConfig","log4rs::encode::json","The JSON encoder&#39;s configuration",null,null],[3,"JsonEncoder","","An `Encode`r which writes a JSON object.",null,null],[3,"JsonEncoderDeserializer","","A deserializer for the `JsonEncoder`.",null,null],[11,"fmt","","",48,null],[11,"new","","Returns a new `JsonEncoder` with a default configuration.",48,{"inputs":[],"output":{"name":"jsonencoder"}}],[11,"encode","","",48,null],[11,"deserialize","","",49,null],[0,"pattern","log4rs::encode","A simple pattern-based encoder.",null,null],[3,"PatternEncoderConfig","log4rs::encode::pattern","The pattern encoder&#39;s configuration.",null,null],[3,"PatternEncoder","","An `Encode`r configured via a format string.",null,null],[3,"PatternEncoderDeserializer","","A deserializer for the `PatternEncoder`.",null,null],[11,"fmt","","",50,null],[11,"default","","",50,{"inputs":[],"output":{"name":"patternencoder"}}],[11,"encode","","",50,null],[11,"new","","Creates a `PatternEncoder` from a pattern string.",50,{"inputs":[{"name":"str"}],"output":{"name":"patternencoder"}}],[11,"deserialize","","",51,null],[0,"writer","log4rs::encode","Implementations of the `encode::Write` trait.",null,null],[0,"ansi","log4rs::encode::writer","The ANSI writer.",null,null],[3,"AnsiWriter","log4rs::encode::writer::ansi","An `encode::Write`r that wraps an `io::Write`r, emitting ANSI escape codes\nfor text style.",null,null],[12,"0","","",52,null],[11,"fmt","","",52,null],[11,"write","","",52,null],[11,"flush","","",52,null],[11,"write_all","","",52,null],[11,"write_fmt","","",52,null],[11,"set_style","","",52,null],[0,"console","log4rs::encode::writer","The console writer",null,null],[3,"ConsoleWriter","log4rs::encode::writer::console","An `encode::Write`r that outputs to a console.",null,null],[3,"ConsoleWriterLock","","An RAII lock over a console.",null,null],[11,"stdout","","Returns a new `ConsoleWriter` that will write to standard out.",53,{"inputs":[],"output":{"name":"option"}}],[11,"lock","","Locks the console, preventing other threads from writing concurrently.",53,null],[11,"write","","",53,null],[11,"flush","","",53,null],[11,"write_all","","",53,null],[11,"write_fmt","","",53,null],[11,"set_style","","",53,null],[11,"write","","",54,null],[11,"flush","","",54,null],[11,"write_all","","",54,null],[11,"write_fmt","","",54,null],[11,"set_style","","",54,null],[0,"simple","log4rs::encode::writer","The simple writer",null,null],[3,"SimpleWriter","log4rs::encode::writer::simple","An `encode::Write`r that simply delegates to an `io::Write`r and relies\non the default implementations of `encode::Write`r methods.",null,null],[12,"0","","",55,null],[11,"fmt","","",55,null],[11,"write","","",55,null],[11,"flush","","",55,null],[11,"write_all","","",55,null],[11,"write_fmt","","",55,null],[8,"Encode","log4rs::encode","A trait implemented by types that can serialize a `LogRecord` into a\n`Write`r.",null,null],[10,"encode","","Encodes the `LogRecord` into bytes and writes them.",56,null],[8,"Write","","A trait for types that an `Encode`r will write to.",null,null],[11,"set_style","","Sets the output text style, if supported.",57,null],[11,"name","","",56,{"inputs":[],"output":{"name":"str"}}],[11,"deserialize","","",45,{"inputs":[{"name":"d"}],"output":{"name":"result"}}],[11,"fmt","","",47,null],[11,"clone","","",47,null],[11,"default","","",46,{"inputs":[],"output":{"name":"style"}}],[11,"clone","","",46,null],[11,"fmt","","",46,null],[11,"new","","Returns a `Style` with all fields set to their defaults.",46,{"inputs":[],"output":{"name":"style"}}],[11,"text","","Sets the text color.",46,null],[11,"background","","Sets the background color.",46,null],[11,"intense","","Sets the text intensity.",46,null],[11,"fmt","log4rs","",0,null],[11,"fmt","","",0,null],[11,"description","","",0,null],[11,"cause","","",0,null],[11,"from","","",0,{"inputs":[{"name":"setloggererror"}],"output":{"name":"error"}}],[11,"from","","",0,{"inputs":[{"name":"box"}],"output":{"name":"error"}}],[11,"set_config","","Sets the logging configuration.",58,null]],"paths":[[4,"Error"],[3,"FileAppender"],[3,"FileAppenderBuilder"],[3,"FileAppenderDeserializer"],[3,"ConsoleAppender"],[3,"ConsoleAppenderBuilder"],[3,"ConsoleAppenderDeserializer"],[3,"DeleteRoller"],[3,"DeleteRollerDeserializer"],[3,"FixedWindowRoller"],[3,"FixedWindowRollerBuilder"],[3,"FixedWindowRollerDeserializer"],[8,"Roll"],[3,"SizeTrigger"],[3,"SizeTriggerDeserializer"],[8,"Trigger"],[3,"CompoundPolicy"],[3,"CompoundPolicyDeserializer"],[8,"Policy"],[3,"LogFile"],[3,"RollingFileAppender"],[3,"RollingFileAppenderBuilder"],[3,"RollingFileAppenderDeserializer"],[8,"Append"],[4,"Error"],[3,"Root"],[3,"RootBuilder"],[3,"Appender"],[3,"AppenderBuilder"],[3,"Logger"],[3,"LoggerBuilder"],[3,"Config"],[3,"ConfigBuilder"],[3,"Errors"],[3,"FilterConfig"],[4,"Response"],[3,"ThresholdFilter"],[3,"ThresholdFilterDeserializer"],[8,"Filter"],[4,"Error"],[4,"Format"],[8,"Deserializable"],[8,"Deserialize"],[3,"Deserializers"],[3,"Config"],[3,"EncoderConfig"],[3,"Style"],[4,"Color"],[3,"JsonEncoder"],[3,"JsonEncoderDeserializer"],[3,"PatternEncoder"],[3,"PatternEncoderDeserializer"],[3,"AnsiWriter"],[3,"ConsoleWriter"],[3,"ConsoleWriterLock"],[3,"SimpleWriter"],[8,"Encode"],[8,"Write"],[3,"Handle"]]};
initSearch(searchIndex);
