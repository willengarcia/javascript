# Use uma imagem base com Node.js
FROM node:18

# Define o diretório de trabalho
WORKDIR /usr/src/app

# Copia os arquivos package.json e package-lock.json
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos do projeto
COPY . .

# Compila o código TypeScript
RUN npx tsc

# Expõe a porta em que a aplicação vai rodar
EXPOSE 3000

# Define o comando para iniciar a aplicação
CMD ["node", "dist/app.js"]
