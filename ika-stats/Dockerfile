FROM java:8

RUN echo "deb http://ppa.launchpad.net/natecarlson/maven3/ubuntu precise main" | tee -a /etc/apt/sources.list
RUN apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 3DD9F856

RUN apt-get update
RUN apt-get install -y maven3
RUN ln -s /usr/share/maven3/bin/mvn /usr/bin/mvn

RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get install -y nodejs

WORKDIR /code

ADD pom.xml /code/pom.xml
RUN mvn dependency:resolve

ADD package.json /code/package.json
ADD gulpfile.js /code/gulpfile.js
RUN npm install

RUN mkdir -p /code/src/main
ADD src/main/java /code/src/main/java
ADD src/main/resources /code/src/main/resources
RUN mvn verify
RUN mvn clean compile

ADD src/main/webapp /code/src/main/webapp
RUN node_modules/gulp/bin/gulp.js build

CMD mvn exec:java
