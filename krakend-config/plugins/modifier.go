// SPDX-License-Identifier: Apache-2.0

package main

import (
	"context"
	"fmt"
	"net/http"
	"io"
)

// HeaderRegisterer is the symbol the plugin loader will try to load.
var HeaderRegisterer = registerer("krakend-header-example")

type registerer string

func (r registerer) RegisterClients(f func(
	name string,
	handler func(context.Context, map[string]interface{}) (http.Handler, error),
)) {
	f(string(r), r.registerClients)
}

func (r registerer) registerClients(_ context.Context, extra map[string]interface{}) (http.Handler, error) {
	return http.HandlerFunc(func(w http.ResponseWriter, req *http.Request) {
		// Add custom header
		req.Header.Add("X-Custom-Header", "MyHeaderValue")

		// Log the header for debugging
		fmt.Println("Added custom header:", req.Header.Get("X-Custom-Header"))

		// Forward the request to the backend
		resp, err := http.DefaultClient.Do(req)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		// Copy response headers and status code
		for k, v := range resp.Header {
			for _, h := range v {
				w.Header().Add(k, h)
			}
		}
		w.WriteHeader(resp.StatusCode)
		defer resp.Body.Close()
		io.Copy(w, resp.Body)
	}), nil
}

func main() {}