import {Construct} from 'constructs';
import {App, TerraformStack} from 'cdktf';
//import {Image} from './.gen/providers/docker';
//import {Release} from './.gen/providers/helm';
import {Auth0Provider, Client} from './.gen/providers/auth0';


class MyStack extends TerraformStack {
    constructor(scope: Construct, name: string) {
        super(scope, name);

        // // define resources here
        // new Release(this, "helm-release-nginx", {
        //     repository: "https://charts.bitnami.com/bitnami",
        //     chart: "bitnami/nginx",
        //     name: "nginx"
        // })

        new Auth0Provider(this, "auth0provider", {
            clientId: "asdadas",
            clientSecret: "asdasdasd",
            domain: "asdasd"
        })

        new Client(this, "auth0-client", {
            name: "test-client-from-cdktf"
        });

        //new Image(this, 'nginx-latest', {
        //    name: "nginx:latest"
        //});
        // new Container(this, "nginx-container", {
        //     name: 'nginx-python-cdktf',
        //     image: image.name,
        //     count: 1,
        //     ports: [
        //         {
        //             'internal': 80,
        //             'external': 8000
        //         }],
        //     privileged: false,
        //     mustRun: false
        // })
    }
}

const app = new App();
new MyStack(app, 'cdktf-typescript');
app.synth();
