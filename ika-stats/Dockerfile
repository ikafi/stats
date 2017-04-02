FROM java:8

RUN echo "deb http://ppa.launchpad.net/natecarlson/maven3/ubuntu precise main" | tee -a /etc/apt/sources.list
RUN apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 3DD9F856

RUN apt-get update
RUN apt-get install -y maven3
RUN ln -s /usr/share/maven3/bin/mvn /usr/bin/mvn

WORKDIR /code
ADD pom.xml /code/pom.xml
RUN mvn dependency:resolve

RUN mkdir -p /code/src/main
ADD src/main/java /code/src/main/java
RUN mvn verify
RUN mvn clean compile

ADD src/main/webapp /code/src/main/webapp
ADD src/main/resources /code/src/main/resources

CMD mvn exec:java
