# Pré-requisitos
Necessario ter uma conta na AWS!

# Instalação
Instale NodeJS e Yarn

Abra seu console e digite (coloque sudo antes, se estiver usando Linux)
$ npm install -g serverless

# Configuração
Antes de começar, precisamos preparar o ambiante local antes de publicar na AWS

Configurar chaves AWS IAM, esta é a chave que permite autenticação local com a AWS
$ serverless config credentials --provider aws --key xxxxxxxxxxxxxx --secret xxxxxxxxxxxxxx

# Crie um projeto simples
O Serverless pode preparar um projeto simples, uma vez definida a pilha de tecnologia (NodeJS) e o provedor de nuvem (AWS) que queremos usar. Portanto, abra um console e digite
```
	$ serverless create --template aws-nodejs --path serverless-aws-nodejs
```

Obs.: o Serverless cria uma nova pasta dentro de um serviço NodeJS básico. Os principais arquivos são:

serverless.yml : é o arquivo de configuração principal do Serverless
handlers.js : ele contém o aplicativo NodeJS. Podemos renomeá-lo em index.js

#Dependencias

Nesta estapa instalamos as dependências necessárias. Entre na pasta criada e digite

```
	$ npm init -y && npm install
```

#Deploy
Terminado as configuações vamos realizar a implantação! Basta digitar no console:
$ serverless deploy 

Aqui, o link para o repositório bitbucket