## AWS Notes
###### Course by Ryan Kroonenburg

AWS was launched in 2006.

### Storage

There was multiple types of storages that are available in AWS.
* S3: Simple Storage Service
* S3 IA: Storage service that is not accessed frequently.
* S3 One-Zone IA: Infrequently accessed storage service that is hosted in only one availability zone.
* [S3 Glacier](https://docs.aws.amazon.com/amazonglacier/latest/dev/introduction.html): Archival storage service. Better for large sized objects.
* S3 Glacier Deep Archive: Truly archived data storage type. _as little as $1 per terabyte per month_ Better for small sized objects.
* S3 Intelligent Tiering: Uses machine learning to manage the files in the bucket

#### Life cycle rules
- Decide when the a bucket should change it's storage type. Like a policy that automatically tells AWS to change the storage type after a certain period of time.
- You can assign lifecycle rules to specific objects with specific tags as well.

#### Cross region replication
AWS gives the feature to replicate data in one bucket in AZ 1 to another bucket in AZ 2.

__Note__
* If cross region is enabled on a non-empty bucket, already existing data needs to be moved to the replicated bucket.
* When a delete occurs in the base bucket, it is not replicated to the replicated bucket. Deletes are not replicated.

### Transfer Acceleration

A tool used to check the speed between availability zones and regions. Along with possible bandwidth costs that might incur.

### Cloud Front

A content delivery network. This service is responsible for providing content from one region to another.

#### Edge Locations
Caching locations used by AWS near every AZ/Regions to cache a recently accessed resource. Cache stay there for the next 24 hrs since the last requested time.
Enabling this allows faster upload and download for users around the world.

#### Invalidate Cache
To tell AWS that some resources should not be caches. This is a chargable service. (Kind of like .gitignore)

### Storage Gateway

A service to copy on-premises data to your S3 bucket.

__AWS cost depends on__
* Compute
* Storage
* Data out transfer

[Cost Overview Page](https://d1.awsstatic.com/whitepapers/aws_pricing_overview.pdf)

__S3 Costing factors__
* Storage type (S3, S3-IA...)
* Requests to S3
* Data transfer within and outside the bucket

__Relational Database Services (RDS) Costing factors__
* DB server uptime
* Type of DB (tier)
* Purchase type (On-demand, reserved)
* Number of DBs running
* Requests to DB
* Number of AZs DB instance is deployed in

__Note__
If DB instance is terminated, it's corresponding backup starts incurring charges.

### [Dynamo DB](https://aws.amazon.com/dynamodb/): 
NoSQL DB service provided with AWS itself.

__Note__
* It is best to keep resources for one application in one location.
* We can buy reserved instances of others, who have chosen to sell it.

Check [AWS Architecture Center](https://aws.amazon.com/architecture/?awsf.quickstart-architecture-page-filter=highlight%23new) for looking at some architectural templates that AWS suggests.

NACL | Security Groups
--- | ---
Applied at a subnet level | Applied to the instance
Stateless: Change to outgoing rule has not effect on incoming rule | Stateful: Change to outgoing rule is replicated to incoming rule
Allows and deny rules | Only allow rules (Everything else is denied)
Process rules in the order of it's priority | All rules are checked before connection

### Elastic Block Store

All the disks, volumes of disks are EBS.

_Hacks_
To encrypt the root drive
1. Take a snapshot of the desired root drive
1. Copy and encrypt it
1. Create an image keeping the encrypted drive as root drive

__Note__
* To change the AZ of a disk, create a snapshot of it in the desired AZ and redeploy.
* To change the region, create an AMI and redeploy the VM.
