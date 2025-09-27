# Config Guardians
Here lives the top level repository for setting up and running config-guardians

## Cloning
### Before cloning
Run `git clone --recurse-submodules https://github.com/Config-Guardians/Config-Guardians`

### After cloning
If you didn't manage to run the command above, you should see all the folders in this repo are empty 

Run `git submodule update --init` after cloning to pull all the folders

## Running
Run `docker compose up` to startup the docker compose project

### After startup is complete
To start watching resources, send a POST request to http://localhost:4000/api/plugin with the following information:

- plugin name
- configuration file content

For more details, refer to the /plugin documentation on [swaggerui](http://localhost:4000/api/swaggerui) (Only available once the compose project has started)

And steampipe plugin documentation (Currently only [github](https://hub.steampipe.io/plugins/turbot/github#configuration) is supported)

Example POST request body to http://localhost:4000/api/plugin:
```
{
    "data": {
        "plugin": "github",
        "configuration": "connection \"github\" {\nplugin = \"github\"\ntoken = \"<GITHUB_TOKEN_HERE>\"\n}"
    }
}
```
