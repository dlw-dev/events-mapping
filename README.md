

# Welcome to N8N Events

Hello and welcome to my first packeage at NPM, I hope you like the solution.
File containing basic functions for sending events to the N8N in several applications using the webhooks function of the N8N itself.


# Install

> npm install n8n-events or yarn add n8n-events

# Use CDN
```
<script src="https://cdn.jsdelivr.net/npm/n8n-events/dist/main-min.js"></script>
```
# Files

> - src/main.js
> - dist/main-min.js

## Use Function

#### Host
> URL of the webhook to which you want to send, remembering that this method is POST

#### Data 
> content you want to send to the webhooks containing the events

#### Function

``` 
const uuid = GerateUuid() 
```
``` 
response = 1d3d86aa-63ab-42aa-be73-96c53348c506 
```

```
 const sendEvent = await Connection(host, data);
```

##   Script Flow

You must add this function in your respective events that you want to record, such as clicks, sending forms, page that the user accessed and thus recording his data.

Workflow Example

[![](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggTFJcbkFbVXNlcl0gLS0-IEIoTjhOIEV2ZW50cylcbkIoTjhOIEV2ZW50cykgLS0-IEMoV2ViSG9va3MpXG5DKFdlYkhvb2tzKSAtLT4gRChNb25nbyBEQiBSZWdpc3RlcilcbkMoV2ViSG9va3MpIC0tPiBFKFNsYWNrIEluZm9ybWF0aW9uKVxuQyhXZWJIb29rcykgLS0-IEYoRWxhc3RpYylcbkMoV2ViSG9va3MpIC0tPiBHKEFpclRhYmxlKSIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9)](https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggTFJcbkFbVXNlcl0gLS0-IEIoTjhOIEV2ZW50cylcbkIoTjhOIEV2ZW50cykgLS0-IEMoV2ViSG9va3MpXG5DKFdlYkhvb2tzKSAtLT4gRChNb25nbyBEQiBSZWdpc3RlcilcbkMoV2ViSG9va3MpIC0tPiBFKFNsYWNrIEluZm9ybWF0aW9uKVxuQyhXZWJIb29rcykgLS0-IEYoRWxhc3RpYylcbkMoV2ViSG9va3MpIC0tPiBHKEFpclRhYmxlKSIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9)

Infinite Possibilities.
Help pull request.
Contact: emerosn@dlweb.co
Good use.