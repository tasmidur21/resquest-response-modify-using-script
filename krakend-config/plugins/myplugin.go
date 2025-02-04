package main

import (
    "errors"
    "fmt"
    "io"
    "net/url"
)

func main() {}

func init() {
    fmt.Println(string(ModifierRegisterer), "loaded!!!")
}

// ModifierRegisterer is the symbol the plugin loader will be looking for. It must
// implement the plugin.Registerer interface
// https://github.com/luraproject/lura/blob/master/proxy/plugin/modifier.go#L71
var ModifierRegisterer = registerer("krakend-debugger")
var registerer = func(name string) interface{} {
	return struct {
		plugin.Registerer
		io.Writer
		io.Reader
		io.Closer
		io.StringWriter
		io.ByteWriter
		




