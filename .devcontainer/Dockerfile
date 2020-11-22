FROM linuxbrew/linuxbrew

RUN sudo apt-get upgrade -y 
RUN sudo apt-get update -y
RUN sudo apt-get install jq -y

RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/Linuxbrew/install/master/install.sh)"

#brew install tools
RUN brew install yarn
RUN brew install aws-cdk
RUN brew install docker
RUN brew install kubectl
RUN brew install helm
RUN brew install awscli 
RUN brew install pipenv
RUN brew install pulumi 
RUN brew install terraform 
RUN brew install node 
RUN brew install cdk8s 
RUN brew install ruby

RUN brew install starship
RUN echo 'eval "$(starship init bash)"' > ~/.bashrc
