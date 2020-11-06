#  Quick Terraform CDK TypeScript  Proof of concept-project.
It doesnt have much stuff in it, it was a quick PoC to just to get a quick taste of how 
coding typescript with the new CDK is compiling, generating terraform code and deploying.

My initial reaction was that it was in a early alpha-state.
Many of the providers I use, like kubernetes, helm, kubernetes-alpha didnt work
and gave Typescript errors when generating code, other more stable like the
Amazon AWS seemed to work well.

##  Compile
    npm run compile     Compile typescript code to javascript (or "npm run watch")
    npm run watch       Watch for changes and compile typescript in the background
    npm run build       cdktf get and compile typescript

##  Synthesize
    cdktf synth         Synthesize Terraform resources from stacks to cdktf.out/ (ready for 'terraform apply')

##  Diff
    cdktf diff          Perform a diff (terraform plan) for the given stack

##  Deploy
    cdktf deploy        Deploy the given stack

##  Destroy
    cdktf destroy       Destroy the stack


## Upgrades
   npm run get           Import/update Terraform providers and modules (you should check-in this directory)
   npm run upgrade       Upgrade cdktf modules to latest version
   npm run upgrade:next  Upgrade cdktf modules to latest "@next" version (last commit)

## Use Prebuilt Providers

  You can add one or multiple of the prebuilt providers listed below:

    npm install -a @cdktf/provider-aws
    npm install -a @cdktf/provider-google
    npm install -a @cdktf/provider-azurerm
    npm install -a @cdktf/provider-docker
    npm install -a @cdktf/provider-github
    npm install -a @cdktf/provider-null

  Check for an up to date list here https://github.com/terraform-cdk-providers
