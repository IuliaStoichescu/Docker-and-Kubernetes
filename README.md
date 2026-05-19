# Docker-and-Kubernetes
Scenario: Dockerizing a Node.js web application and deploying the previously containerized web application to Kubernetes.
Provisioning
Download and install Docker Desktop (for Windows and Mac) or Docker Engine (for Linux) from the official Docker website. Docker will allow you to build and run containerized applications using Dockerfiles.

Download and install kubectl following the instructions on the official Kubernetes documentation.

A Kubernetes Cluster:

For learning and development purposes, you can use Docker Desktop which includes a standalone Kubernetes server and client, as well as Docker CLI integration. It's a lightweight solution suitable for development and testing.
For production scenarios, you might consider a managed Kubernetes service like Google Kubernetes Engine (GKE), Amazon Elastic Kubernetes Service (EKS), or Azure Kubernetes Service (AKS). These services provide Kubernetes clusters that you can manage using kubectl.
Configuring kubectl: If you're using a managed Kubernetes service (GKE, EKS, AKS), you'll need to configure kubectl to communicate with your cluster. Each cloud provider has specific instructions for doing this:
GKE: Typically involves running a gcloud command to get credentials for your cluster.
EKS: You might use the aws eks update-kubeconfig command with the AWS CLI.
AKS: You can use the az aks get-credentials command with the Azure CLI.
Context Switching in kubectl: If you're working with multiple clusters, kubectl config use-context allows you to switch between clusters/environments.
Docker Part
1. Create a Dockerfile
Here's an example Dockerfile for a Node.js application:

This Dockerfile does the following:

Starts from the official Node.js version 14 image.
Sets the working directory inside the container to /usr/src/app.
Copies package.json and package-lock.json to use cached layers for node modules if they haven't changed.
Installs the application dependencies using npm install.
Copies the application source code into the container.
Exposes port 3000 to the host.
Specifies the command to start the application (node app.js).
2. Build the Docker Image
To build the Docker image, use the following command in the terminal, executed in the directory where the Dockerfile is located:

docker build -t my-nodejs-app .

This command builds the Docker image and tags it (-t) with the name my-nodejs-app.

3. Run the Container
To run the container from the image, mapping port 3000 of the container to port 3000 of the host, use the following command:

docker run -p 3000:3000 my-nodejs-app 

Kubernetes Part
2.1. Write a Deployment Configuration
Create a file named deployment.yaml with the content from the attached deployment.yaml file.

This deployment configuration:

Specifies two replicas of the pod.
Uses the my-nodejs-app image.
Opens port 3000 on the container.
2.2. Create a Service
To expose the deployment to the internet, create a file named service.yaml with content from the attached service.yaml.

This service:

Is of type LoadBalancer, which makes the service accessible through an external IP address.
Forwards traffic from port 80 on the service to port 3000 on the pod.