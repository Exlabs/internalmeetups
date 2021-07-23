FROM golang:1.16 AS builder
WORKDIR /go/src/simpleappfromexlabs/
RUN go get -d -v golang.org/x/net/html  
COPY app.go    ./
RUN go mod init
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o app .

FROM alpine:latest  
RUN apk --no-cache add ca-certificates
WORKDIR /root/
COPY --from=builder /go/src/simpleappfromexlabs/app ./
CMD ["./app"]