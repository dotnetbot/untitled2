# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
#
# Also note: You'll have to insert the output of 'django-admin.py sqlcustom [app_label]'
# into your database.
from __future__ import unicode_literals

from django.db import models


class Account(models.Model):
    id = models.AutoField(db_column='Id', primary_key=True)  # Field name made lowercase.
    claimid = models.IntegerField(db_column='ClaimId')  # Field name made lowercase.
    number = models.CharField(db_column='Number', max_length=50, blank=True)  # Field name made lowercase.
    opendate = models.DateTimeField(db_column='OpenDate', blank=True, null=True)  # Field name made lowercase.
    actualclosedate = models.DateTimeField(db_column='ActualCloseDate', blank=True, null=True)  # Field name made lowercase.
    plannedclosedate = models.DateTimeField(db_column='PlannedCloseDate', blank=True, null=True)  # Field name made lowercase.
    isbonus = models.NullBooleanField(db_column='IsBonus')  # Field name made lowercase.
    sender = models.CharField(db_column='Sender', max_length=50, blank=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Account'


class Accountoperation(models.Model):
    id = models.AutoField(db_column='Id', primary_key=True)  # Field name made lowercase.
    accountid = models.IntegerField(db_column='AccountId')  # Field name made lowercase.
    sumbalancebeginning = models.DecimalField(db_column='SumBalanceBeginning', max_digits=18, decimal_places=2, blank=True, null=True)  # Field name made lowercase.
    sumreceipts = models.DecimalField(db_column='SumReceipts', max_digits=18, decimal_places=2, blank=True, null=True)  # Field name made lowercase.
    suminterest = models.DecimalField(db_column='SumInterest', max_digits=18, decimal_places=2, blank=True, null=True)  # Field name made lowercase.
    sumexpense = models.DecimalField(db_column='SumExpense', max_digits=18, decimal_places=2, blank=True, null=True)  # Field name made lowercase.
    sumbalanceending = models.DecimalField(db_column='SumBalanceEnding', max_digits=18, decimal_places=2, blank=True, null=True)  # Field name made lowercase.
    balancedate = models.DateTimeField(db_column='BalanceDate', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'AccountOperation'


class Cardissuers(models.Model):
    id = models.AutoField(db_column='Id', primary_key=True)  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=50)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'CardIssuers'


class Cards(models.Model):
    id = models.AutoField(db_column='Id', primary_key=True)  # Field name made lowercase.
    issuerid = models.IntegerField(db_column='IssuerId')  # Field name made lowercase.
    number = models.CharField(db_column='Number', max_length=20)  # Field name made lowercase.
    personid = models.IntegerField(db_column='PersonId')  # Field name made lowercase.
    islockedout = models.BooleanField(db_column='IsLockedOut')  # Field name made lowercase.
    lasteditdate = models.DateTimeField(db_column='LastEditDate', blank=True, null=True)  # Field name made lowercase.
    date = models.DateTimeField(db_column='Date', blank=True, null=True)  # Field name made lowercase.
    phone = models.CharField(db_column='Phone', max_length=50, blank=True)  # Field name made lowercase.
    email = models.CharField(db_column='Email', max_length=50, blank=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Cards'


class Client(models.Model):
    id = models.AutoField(db_column='Id', primary_key=True)  # Field name made lowercase.
    family = models.CharField(db_column='FAMILY', max_length=50)  # Field name made lowercase.
    name = models.CharField(db_column='NAME', max_length=50)  # Field name made lowercase.
    lastname = models.CharField(db_column='LASTNAME', max_length=50, blank=True)  # Field name made lowercase.
    sex = models.CharField(db_column='SEX', max_length=1, blank=True)  # Field name made lowercase.
    date_born = models.DateTimeField(db_column='DATE_BORN', blank=True, null=True)  # Field name made lowercase.
    num_ils = models.CharField(db_column='NUM_ILS', max_length=14, blank=True)  # Field name made lowercase.
    password = models.CharField(db_column='Password', max_length=10, blank=True)  # Field name made lowercase.
    islockedout = models.BooleanField(db_column='IsLockedOut')  # Field name made lowercase.
    adoptiondate = models.DateTimeField(db_column='AdoptionDate', blank=True, null=True)  # Field name made lowercase.
    phonenumber = models.CharField(db_column='PhoneNumber', max_length=20, blank=True)  # Field name made lowercase.
    email = models.CharField(db_column='Email', max_length=50, blank=True)  # Field name made lowercase.
    date_password = models.DateTimeField(db_column='Date_password', blank=True, null=True)  # Field name made lowercase.
    lastedited = models.DateTimeField(db_column='LastEdited', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Client'


class DicAdministrations(models.Model):
    id = models.AutoField(db_column='Id', primary_key=True)  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=250, blank=True)  # Field name made lowercase.
    districtid = models.IntegerField(db_column='DistrictId', blank=True, null=True)  # Field name made lowercase.
    organizationtype = models.IntegerField(db_column='OrganizationType', blank=True, null=True)  # Field name made lowercase.
    headerfirstnameingenitive = models.CharField(db_column='HeaderFirstNameInGenitive', max_length=50, blank=True)  # Field name made lowercase.
    headerlastnameingenitive = models.CharField(db_column='HeaderLastNameInGenitive', max_length=50, blank=True)  # Field name made lowercase.
    headermiddlenameingenitive = models.CharField(db_column='HeaderMiddleNameInGenitive', max_length=50, blank=True)  # Field name made lowercase.
    inn = models.CharField(db_column='INN', max_length=50, blank=True)  # Field name made lowercase.
    kpp = models.CharField(db_column='KPP', max_length=50, blank=True)  # Field name made lowercase.
    oktmo = models.CharField(db_column='OKTMO', max_length=50, blank=True)  # Field name made lowercase.
    headerfoundingdocument = models.CharField(db_column='HeaderFoundingDocument', max_length=250, blank=True)  # Field name made lowercase.
    nameindative = models.CharField(db_column='NameInDative', max_length=250, blank=True)  # Field name made lowercase.
    nameingenitive = models.CharField(db_column='NameInGenitive', max_length=250, blank=True)  # Field name made lowercase.
    budgetlaw = models.CharField(db_column='BudgetLaw', max_length=250, blank=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Dic_Administrations'


class DicCategory(models.Model):
    id = models.AutoField(db_column='Id', primary_key=True)  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=555, blank=True)  # Field name made lowercase.
    org = models.CharField(db_column='Org', max_length=10, blank=True)  # Field name made lowercase.
    short_name = models.CharField(db_column='Short_name', max_length=100, blank=True)  # Field name made lowercase.
    idgorod = models.IntegerField(db_column='IdGorod', blank=True, null=True)  # Field name made lowercase.
    papertemplateid = models.IntegerField(db_column='PaperTemplateId', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Dic_Category'


class DicTypeprogram(models.Model):
    id = models.AutoField(db_column='Id', primary_key=True)  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=100)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Dic_TypeProgram'


class Districts(models.Model):
    id = models.AutoField(db_column='Id', primary_key=True)  # Field name made lowercase.
    name = models.TextField(db_column='Name', blank=True)  # Field name made lowercase.
    parent = models.IntegerField(db_column='Parent', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Districts'


class Document(models.Model):
    id = models.AutoField(db_column='Id', primary_key=True)  # Field name made lowercase.
    clientid = models.IntegerField(db_column='ClientId', blank=True, null=True)  # Field name made lowercase.
    statementid = models.IntegerField(db_column='StatementId', blank=True, null=True)  # Field name made lowercase.
    typedocumentid = models.IntegerField(db_column='TypeDocumentId')  # Field name made lowercase.
    ser_doc = models.CharField(db_column='SER_DOC', max_length=14, blank=True)  # Field name made lowercase.
    num_doc = models.CharField(db_column='NUM_DOC', max_length=13, blank=True)  # Field name made lowercase.
    org_name = models.CharField(db_column='ORG_NAME', max_length=300, blank=True)  # Field name made lowercase.
    org_code = models.CharField(db_column='ORG_CODE', max_length=7, blank=True)  # Field name made lowercase.
    doc_date = models.DateTimeField(db_column='DOC_DATE', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Document'


class Program(models.Model):
    id = models.AutoField(db_column='Id', primary_key=True)  # Field name made lowercase.
    statementid = models.IntegerField(db_column='StatementId')  # Field name made lowercase.
    typeprogramid = models.IntegerField(db_column='TypeProgramId')  # Field name made lowercase.
    categoryid = models.IntegerField(db_column='CategoryId', blank=True, null=True)  # Field name made lowercase.
    date_reg = models.DateTimeField(db_column='DATE_REG', blank=True, null=True)  # Field name made lowercase.
    date_org = models.DateTimeField(db_column='DATE_ORG', blank=True, null=True)  # Field name made lowercase.
    num_general_pr = models.IntegerField(db_column='NUM_GENERAL_PR', blank=True, null=True)  # Field name made lowercase.
    num_inner_pr = models.IntegerField(db_column='NUM_INNER_PR', blank=True, null=True)  # Field name made lowercase.
    statusstatid = models.IntegerField(db_column='StatusStatId', blank=True, null=True)  # Field name made lowercase.
    priority = models.IntegerField(db_column='Priority', blank=True, null=True)  # Field name made lowercase.
    estimatedworkcost = models.DecimalField(db_column='EstimatedWorkCost', max_digits=18, decimal_places=2, blank=True, null=True)  # Field name made lowercase.
    performedworkcost = models.DecimalField(db_column='PerformedWorkCost', max_digits=18, decimal_places=2, blank=True, null=True)  # Field name made lowercase.
    restored = models.NullBooleanField(db_column='Restored')  # Field name made lowercase.
    typereasonrestoreid = models.IntegerField(db_column='TypeReasonRestoreId', blank=True, null=True)  # Field name made lowercase.
    typeformsupportid = models.IntegerField(db_column='TypeFormSupportId', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Program'


class Statement(models.Model):
    id = models.AutoField(db_column='Id', primary_key=True)  # Field name made lowercase.
    administrationsid = models.IntegerField(db_column='AdministrationsId')  # Field name made lowercase.
    clientid = models.IntegerField(db_column='ClientId')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Statement'


class User(models.Model):
    id = models.TextField(db_column='Id', primary_key=True)  # Field name made lowercase. This field type is a guess.
    username = models.CharField(db_column='UserName', max_length=50, blank=True)  # Field name made lowercase.
    number = models.CharField(db_column='Number', max_length=50, blank=True)  # Field name made lowercase.
    password = models.CharField(db_column='Password', max_length=128)  # Field name made lowercase.
    pnonenumber = models.CharField(db_column='PnoneNumber', max_length=20)  # Field name made lowercase.
    clientid = models.IntegerField(db_column='ClientId', blank=True, null=True)  # Field name made lowercase.
    lastname = models.CharField(db_column='LastName', max_length=50, blank=True)  # Field name made lowercase.
    firstname = models.CharField(db_column='FirstName', max_length=50, blank=True)  # Field name made lowercase.
    middlename = models.CharField(db_column='MiddleName', max_length=50, blank=True)  # Field name made lowercase.
    docseries = models.CharField(db_column='DocSeries', max_length=50, blank=True)  # Field name made lowercase.
    docnumber = models.CharField(db_column='DocNumber', max_length=50, blank=True)  # Field name made lowercase.
    docdate = models.DateTimeField(db_column='DocDate', blank=True, null=True)  # Field name made lowercase.
    snils = models.CharField(db_column='SNILS', max_length=50, blank=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Users'

