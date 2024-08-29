# Use uma imagem base Node.js
FROM node:18

# Crie e defina o diretório de trabalho
WORKDIR /usr/src/app

# Copie os arquivos package.json e package-lock.json
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie todo o código-fonte para o diretório de trabalho
COPY . .

# Compile o código TypeScript para JavaScript
RUN npm run build

# Exponha a porta em que o servidor escutará
EXPOSE 3001

# Comando para iniciar a aplicação
CMD ["npm", "start"]
