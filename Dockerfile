FROM node:18.11.0 as frontend
WORKDIR /frontend
COPY src/frontend .
RUN npm ci
RUN npm run build

FROM maven:3.6.3-jdk-11 as backend
WORKDIR /backend
COPY . .
RUN mkdir -p src/main/resources/static
COPY --from=frontend /frontend/build src/main/resources/static
RUN mvn clean install
FROM openjdk:20-ea-11-jdk
COPY --from=backend /backend/target/ipl-dashboard-0.0.1-SNAPSHOT.jar ./app.jar
EXPOSE 8080
CMD [ "sh", "-c", "java -Dserver.port=$PORT -Djava.security.egd=file:/dev/./urandom -jar app.jar" ]