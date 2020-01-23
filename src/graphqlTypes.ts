export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Date: any,
  JSON: any,
};











export type IBooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>,
  ne?: Maybe<Scalars['Boolean']>,
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
};


export type IDateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>,
  ne?: Maybe<Scalars['Date']>,
  gt?: Maybe<Scalars['Date']>,
  gte?: Maybe<Scalars['Date']>,
  lt?: Maybe<Scalars['Date']>,
  lte?: Maybe<Scalars['Date']>,
  in?: Maybe<Array<Maybe<Scalars['Date']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>,
};

export type IDirectory = INode & {
   __typename?: 'Directory',
  sourceInstanceName: Scalars['String'],
  absolutePath: Scalars['String'],
  relativePath: Scalars['String'],
  extension: Scalars['String'],
  size: Scalars['Int'],
  prettySize: Scalars['String'],
  modifiedTime: Scalars['Date'],
  accessTime: Scalars['Date'],
  changeTime: Scalars['Date'],
  birthTime: Scalars['Date'],
  root: Scalars['String'],
  dir: Scalars['String'],
  base: Scalars['String'],
  ext: Scalars['String'],
  name: Scalars['String'],
  relativeDirectory: Scalars['String'],
  dev: Scalars['Int'],
  mode: Scalars['Int'],
  nlink: Scalars['Int'],
  uid: Scalars['Int'],
  gid: Scalars['Int'],
  rdev: Scalars['Int'],
  ino: Scalars['Float'],
  atimeMs: Scalars['Float'],
  mtimeMs: Scalars['Float'],
  ctimeMs: Scalars['Float'],
  atime: Scalars['Date'],
  mtime: Scalars['Date'],
  ctime: Scalars['Date'],
  birthtime?: Maybe<Scalars['Date']>,
  birthtimeMs?: Maybe<Scalars['Float']>,
  blksize?: Maybe<Scalars['Int']>,
  blocks?: Maybe<Scalars['Int']>,
  id: Scalars['ID'],
  parent?: Maybe<INode>,
  children: Array<INode>,
  internal: IInternal,
};


export type IDirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type IDirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type IDirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type IDirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type IDirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type IDirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type IDirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type IDirectoryConnection = {
   __typename?: 'DirectoryConnection',
  totalCount: Scalars['Int'],
  edges: Array<IDirectoryEdge>,
  nodes: Array<IDirectory>,
  pageInfo: IPageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<IDirectoryGroupConnection>,
};


export type IDirectoryConnectionDistinctArgs = {
  field: IDirectoryFieldsEnum
};


export type IDirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: IDirectoryFieldsEnum
};

export type IDirectoryEdge = {
   __typename?: 'DirectoryEdge',
  next?: Maybe<IDirectory>,
  node: IDirectory,
  previous?: Maybe<IDirectory>,
};

export enum IDirectoryFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type IDirectoryFilterInput = {
  sourceInstanceName?: Maybe<IStringQueryOperatorInput>,
  absolutePath?: Maybe<IStringQueryOperatorInput>,
  relativePath?: Maybe<IStringQueryOperatorInput>,
  extension?: Maybe<IStringQueryOperatorInput>,
  size?: Maybe<IIntQueryOperatorInput>,
  prettySize?: Maybe<IStringQueryOperatorInput>,
  modifiedTime?: Maybe<IDateQueryOperatorInput>,
  accessTime?: Maybe<IDateQueryOperatorInput>,
  changeTime?: Maybe<IDateQueryOperatorInput>,
  birthTime?: Maybe<IDateQueryOperatorInput>,
  root?: Maybe<IStringQueryOperatorInput>,
  dir?: Maybe<IStringQueryOperatorInput>,
  base?: Maybe<IStringQueryOperatorInput>,
  ext?: Maybe<IStringQueryOperatorInput>,
  name?: Maybe<IStringQueryOperatorInput>,
  relativeDirectory?: Maybe<IStringQueryOperatorInput>,
  dev?: Maybe<IIntQueryOperatorInput>,
  mode?: Maybe<IIntQueryOperatorInput>,
  nlink?: Maybe<IIntQueryOperatorInput>,
  uid?: Maybe<IIntQueryOperatorInput>,
  gid?: Maybe<IIntQueryOperatorInput>,
  rdev?: Maybe<IIntQueryOperatorInput>,
  ino?: Maybe<IFloatQueryOperatorInput>,
  atimeMs?: Maybe<IFloatQueryOperatorInput>,
  mtimeMs?: Maybe<IFloatQueryOperatorInput>,
  ctimeMs?: Maybe<IFloatQueryOperatorInput>,
  atime?: Maybe<IDateQueryOperatorInput>,
  mtime?: Maybe<IDateQueryOperatorInput>,
  ctime?: Maybe<IDateQueryOperatorInput>,
  birthtime?: Maybe<IDateQueryOperatorInput>,
  birthtimeMs?: Maybe<IFloatQueryOperatorInput>,
  blksize?: Maybe<IIntQueryOperatorInput>,
  blocks?: Maybe<IIntQueryOperatorInput>,
  id?: Maybe<IStringQueryOperatorInput>,
  parent?: Maybe<INodeFilterInput>,
  children?: Maybe<INodeFilterListInput>,
  internal?: Maybe<IInternalFilterInput>,
};

export type IDirectoryGroupConnection = {
   __typename?: 'DirectoryGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<IDirectoryEdge>,
  nodes: Array<IDirectory>,
  pageInfo: IPageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type IDirectorySortInput = {
  fields?: Maybe<Array<Maybe<IDirectoryFieldsEnum>>>,
  order?: Maybe<Array<Maybe<ISortOrderEnum>>>,
};

export type IFile = INode & {
   __typename?: 'File',
  sourceInstanceName: Scalars['String'],
  absolutePath: Scalars['String'],
  relativePath: Scalars['String'],
  extension: Scalars['String'],
  size: Scalars['Int'],
  prettySize: Scalars['String'],
  modifiedTime: Scalars['Date'],
  accessTime: Scalars['Date'],
  changeTime: Scalars['Date'],
  birthTime: Scalars['Date'],
  root: Scalars['String'],
  dir: Scalars['String'],
  base: Scalars['String'],
  ext: Scalars['String'],
  name: Scalars['String'],
  relativeDirectory: Scalars['String'],
  dev: Scalars['Int'],
  mode: Scalars['Int'],
  nlink: Scalars['Int'],
  uid: Scalars['Int'],
  gid: Scalars['Int'],
  rdev: Scalars['Int'],
  ino: Scalars['Float'],
  atimeMs: Scalars['Float'],
  mtimeMs: Scalars['Float'],
  ctimeMs: Scalars['Float'],
  atime: Scalars['Date'],
  mtime: Scalars['Date'],
  ctime: Scalars['Date'],
  birthtime?: Maybe<Scalars['Date']>,
  birthtimeMs?: Maybe<Scalars['Float']>,
  blksize?: Maybe<Scalars['Int']>,
  blocks?: Maybe<Scalars['Int']>,
  publicURL?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  parent?: Maybe<INode>,
  children: Array<INode>,
  internal: IInternal,
  childMarkdownRemark?: Maybe<IMarkdownRemark>,
};


export type IFileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type IFileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type IFileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type IFileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type IFileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type IFileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type IFileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type IFileConnection = {
   __typename?: 'FileConnection',
  totalCount: Scalars['Int'],
  edges: Array<IFileEdge>,
  nodes: Array<IFile>,
  pageInfo: IPageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<IFileGroupConnection>,
};


export type IFileConnectionDistinctArgs = {
  field: IFileFieldsEnum
};


export type IFileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: IFileFieldsEnum
};

export type IFileEdge = {
   __typename?: 'FileEdge',
  next?: Maybe<IFile>,
  node: IFile,
  previous?: Maybe<IFile>,
};

export enum IFileFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  PublicUrl = 'publicURL',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ChildMarkdownRemarkId = 'childMarkdownRemark___id',
  ChildMarkdownRemarkFrontmatterTitle = 'childMarkdownRemark___frontmatter___title',
  ChildMarkdownRemarkFrontmatterDate = 'childMarkdownRemark___frontmatter___date',
  ChildMarkdownRemarkFrontmatterTags = 'childMarkdownRemark___frontmatter___tags',
  ChildMarkdownRemarkFrontmatterKeywords = 'childMarkdownRemark___frontmatter___keywords',
  ChildMarkdownRemarkFrontmatterSlug = 'childMarkdownRemark___frontmatter___slug',
  ChildMarkdownRemarkFrontmatterDescription = 'childMarkdownRemark___frontmatter___description',
  ChildMarkdownRemarkFrontmatterKeyword = 'childMarkdownRemark___frontmatter___keyword',
  ChildMarkdownRemarkExcerpt = 'childMarkdownRemark___excerpt',
  ChildMarkdownRemarkRawMarkdownBody = 'childMarkdownRemark___rawMarkdownBody',
  ChildMarkdownRemarkFileAbsolutePath = 'childMarkdownRemark___fileAbsolutePath',
  ChildMarkdownRemarkHtml = 'childMarkdownRemark___html',
  ChildMarkdownRemarkHtmlAst = 'childMarkdownRemark___htmlAst',
  ChildMarkdownRemarkExcerptAst = 'childMarkdownRemark___excerptAst',
  ChildMarkdownRemarkHeadings = 'childMarkdownRemark___headings',
  ChildMarkdownRemarkHeadingsValue = 'childMarkdownRemark___headings___value',
  ChildMarkdownRemarkHeadingsDepth = 'childMarkdownRemark___headings___depth',
  ChildMarkdownRemarkTimeToRead = 'childMarkdownRemark___timeToRead',
  ChildMarkdownRemarkTableOfContents = 'childMarkdownRemark___tableOfContents',
  ChildMarkdownRemarkWordCountParagraphs = 'childMarkdownRemark___wordCount___paragraphs',
  ChildMarkdownRemarkWordCountSentences = 'childMarkdownRemark___wordCount___sentences',
  ChildMarkdownRemarkWordCountWords = 'childMarkdownRemark___wordCount___words',
  ChildMarkdownRemarkHeadingsDetail = 'childMarkdownRemark___headingsDetail',
  ChildMarkdownRemarkHeadingsDetailValue = 'childMarkdownRemark___headingsDetail___value',
  ChildMarkdownRemarkHeadingsDetailId = 'childMarkdownRemark___headingsDetail___id',
  ChildMarkdownRemarkHeadingsDetailDepth = 'childMarkdownRemark___headingsDetail___depth',
  ChildMarkdownRemarkHeadingsDetailParents = 'childMarkdownRemark___headingsDetail___parents',
  ChildMarkdownRemarkHeadingsDetailParentsValue = 'childMarkdownRemark___headingsDetail___parents___value',
  ChildMarkdownRemarkHeadingsDetailParentsId = 'childMarkdownRemark___headingsDetail___parents___id',
  ChildMarkdownRemarkHeadingsDetailParentsDepth = 'childMarkdownRemark___headingsDetail___parents___depth',
  ChildMarkdownRemarkParentId = 'childMarkdownRemark___parent___id',
  ChildMarkdownRemarkParentParentId = 'childMarkdownRemark___parent___parent___id',
  ChildMarkdownRemarkParentParentChildren = 'childMarkdownRemark___parent___parent___children',
  ChildMarkdownRemarkParentChildren = 'childMarkdownRemark___parent___children',
  ChildMarkdownRemarkParentChildrenId = 'childMarkdownRemark___parent___children___id',
  ChildMarkdownRemarkParentChildrenChildren = 'childMarkdownRemark___parent___children___children',
  ChildMarkdownRemarkParentInternalContent = 'childMarkdownRemark___parent___internal___content',
  ChildMarkdownRemarkParentInternalContentDigest = 'childMarkdownRemark___parent___internal___contentDigest',
  ChildMarkdownRemarkParentInternalDescription = 'childMarkdownRemark___parent___internal___description',
  ChildMarkdownRemarkParentInternalFieldOwners = 'childMarkdownRemark___parent___internal___fieldOwners',
  ChildMarkdownRemarkParentInternalIgnoreType = 'childMarkdownRemark___parent___internal___ignoreType',
  ChildMarkdownRemarkParentInternalMediaType = 'childMarkdownRemark___parent___internal___mediaType',
  ChildMarkdownRemarkParentInternalOwner = 'childMarkdownRemark___parent___internal___owner',
  ChildMarkdownRemarkParentInternalType = 'childMarkdownRemark___parent___internal___type',
  ChildMarkdownRemarkChildren = 'childMarkdownRemark___children',
  ChildMarkdownRemarkChildrenId = 'childMarkdownRemark___children___id',
  ChildMarkdownRemarkChildrenParentId = 'childMarkdownRemark___children___parent___id',
  ChildMarkdownRemarkChildrenParentChildren = 'childMarkdownRemark___children___parent___children',
  ChildMarkdownRemarkChildrenChildren = 'childMarkdownRemark___children___children',
  ChildMarkdownRemarkChildrenChildrenId = 'childMarkdownRemark___children___children___id',
  ChildMarkdownRemarkChildrenChildrenChildren = 'childMarkdownRemark___children___children___children',
  ChildMarkdownRemarkChildrenInternalContent = 'childMarkdownRemark___children___internal___content',
  ChildMarkdownRemarkChildrenInternalContentDigest = 'childMarkdownRemark___children___internal___contentDigest',
  ChildMarkdownRemarkChildrenInternalDescription = 'childMarkdownRemark___children___internal___description',
  ChildMarkdownRemarkChildrenInternalFieldOwners = 'childMarkdownRemark___children___internal___fieldOwners',
  ChildMarkdownRemarkChildrenInternalIgnoreType = 'childMarkdownRemark___children___internal___ignoreType',
  ChildMarkdownRemarkChildrenInternalMediaType = 'childMarkdownRemark___children___internal___mediaType',
  ChildMarkdownRemarkChildrenInternalOwner = 'childMarkdownRemark___children___internal___owner',
  ChildMarkdownRemarkChildrenInternalType = 'childMarkdownRemark___children___internal___type',
  ChildMarkdownRemarkInternalContent = 'childMarkdownRemark___internal___content',
  ChildMarkdownRemarkInternalContentDigest = 'childMarkdownRemark___internal___contentDigest',
  ChildMarkdownRemarkInternalDescription = 'childMarkdownRemark___internal___description',
  ChildMarkdownRemarkInternalFieldOwners = 'childMarkdownRemark___internal___fieldOwners',
  ChildMarkdownRemarkInternalIgnoreType = 'childMarkdownRemark___internal___ignoreType',
  ChildMarkdownRemarkInternalMediaType = 'childMarkdownRemark___internal___mediaType',
  ChildMarkdownRemarkInternalOwner = 'childMarkdownRemark___internal___owner',
  ChildMarkdownRemarkInternalType = 'childMarkdownRemark___internal___type'
}

export type IFileFilterInput = {
  sourceInstanceName?: Maybe<IStringQueryOperatorInput>,
  absolutePath?: Maybe<IStringQueryOperatorInput>,
  relativePath?: Maybe<IStringQueryOperatorInput>,
  extension?: Maybe<IStringQueryOperatorInput>,
  size?: Maybe<IIntQueryOperatorInput>,
  prettySize?: Maybe<IStringQueryOperatorInput>,
  modifiedTime?: Maybe<IDateQueryOperatorInput>,
  accessTime?: Maybe<IDateQueryOperatorInput>,
  changeTime?: Maybe<IDateQueryOperatorInput>,
  birthTime?: Maybe<IDateQueryOperatorInput>,
  root?: Maybe<IStringQueryOperatorInput>,
  dir?: Maybe<IStringQueryOperatorInput>,
  base?: Maybe<IStringQueryOperatorInput>,
  ext?: Maybe<IStringQueryOperatorInput>,
  name?: Maybe<IStringQueryOperatorInput>,
  relativeDirectory?: Maybe<IStringQueryOperatorInput>,
  dev?: Maybe<IIntQueryOperatorInput>,
  mode?: Maybe<IIntQueryOperatorInput>,
  nlink?: Maybe<IIntQueryOperatorInput>,
  uid?: Maybe<IIntQueryOperatorInput>,
  gid?: Maybe<IIntQueryOperatorInput>,
  rdev?: Maybe<IIntQueryOperatorInput>,
  ino?: Maybe<IFloatQueryOperatorInput>,
  atimeMs?: Maybe<IFloatQueryOperatorInput>,
  mtimeMs?: Maybe<IFloatQueryOperatorInput>,
  ctimeMs?: Maybe<IFloatQueryOperatorInput>,
  atime?: Maybe<IDateQueryOperatorInput>,
  mtime?: Maybe<IDateQueryOperatorInput>,
  ctime?: Maybe<IDateQueryOperatorInput>,
  birthtime?: Maybe<IDateQueryOperatorInput>,
  birthtimeMs?: Maybe<IFloatQueryOperatorInput>,
  blksize?: Maybe<IIntQueryOperatorInput>,
  blocks?: Maybe<IIntQueryOperatorInput>,
  publicURL?: Maybe<IStringQueryOperatorInput>,
  id?: Maybe<IStringQueryOperatorInput>,
  parent?: Maybe<INodeFilterInput>,
  children?: Maybe<INodeFilterListInput>,
  internal?: Maybe<IInternalFilterInput>,
  childMarkdownRemark?: Maybe<IMarkdownRemarkFilterInput>,
};

export type IFileGroupConnection = {
   __typename?: 'FileGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<IFileEdge>,
  nodes: Array<IFile>,
  pageInfo: IPageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type IFileSortInput = {
  fields?: Maybe<Array<Maybe<IFileFieldsEnum>>>,
  order?: Maybe<Array<Maybe<ISortOrderEnum>>>,
};

export type IFloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type IInternal = {
   __typename?: 'Internal',
  content?: Maybe<Scalars['String']>,
  contentDigest: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>,
  ignoreType?: Maybe<Scalars['Boolean']>,
  mediaType?: Maybe<Scalars['String']>,
  owner: Scalars['String'],
  type: Scalars['String'],
};

export type IInternalFilterInput = {
  content?: Maybe<IStringQueryOperatorInput>,
  contentDigest?: Maybe<IStringQueryOperatorInput>,
  description?: Maybe<IStringQueryOperatorInput>,
  fieldOwners?: Maybe<IStringQueryOperatorInput>,
  ignoreType?: Maybe<IBooleanQueryOperatorInput>,
  mediaType?: Maybe<IStringQueryOperatorInput>,
  owner?: Maybe<IStringQueryOperatorInput>,
  type?: Maybe<IStringQueryOperatorInput>,
};

export type IIntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};


export type IJsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>,
  ne?: Maybe<Scalars['JSON']>,
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>,
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>,
  regex?: Maybe<Scalars['JSON']>,
  glob?: Maybe<Scalars['JSON']>,
};

export enum IMarkdownExcerptFormats {
  Plain = 'PLAIN',
  Html = 'HTML',
  Markdown = 'MARKDOWN'
}

export type IMarkdownHeading = {
   __typename?: 'MarkdownHeading',
  value?: Maybe<Scalars['String']>,
  depth?: Maybe<Scalars['Int']>,
};

export type IMarkdownHeadingDetail = {
   __typename?: 'MarkdownHeadingDetail',
  value?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  depth?: Maybe<Scalars['Int']>,
  parents?: Maybe<Array<Maybe<IMarkdownParentHeadingDetail>>>,
};

export type IMarkdownHeadingDetailFilterInput = {
  value?: Maybe<IStringQueryOperatorInput>,
  id?: Maybe<IStringQueryOperatorInput>,
  depth?: Maybe<IIntQueryOperatorInput>,
  parents?: Maybe<IMarkdownParentHeadingDetailFilterListInput>,
};

export type IMarkdownHeadingDetailFilterListInput = {
  elemMatch?: Maybe<IMarkdownHeadingDetailFilterInput>,
};

export type IMarkdownHeadingFilterInput = {
  value?: Maybe<IStringQueryOperatorInput>,
  depth?: Maybe<IIntQueryOperatorInput>,
};

export type IMarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<IMarkdownHeadingFilterInput>,
};

export enum IMarkdownHeadingLevels {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6'
}

export type IMarkdownParentHeadingDetail = {
   __typename?: 'MarkdownParentHeadingDetail',
  value?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  depth?: Maybe<Scalars['Int']>,
};

export type IMarkdownParentHeadingDetailFilterInput = {
  value?: Maybe<IStringQueryOperatorInput>,
  id?: Maybe<IStringQueryOperatorInput>,
  depth?: Maybe<IIntQueryOperatorInput>,
};

export type IMarkdownParentHeadingDetailFilterListInput = {
  elemMatch?: Maybe<IMarkdownParentHeadingDetailFilterInput>,
};

export type IMarkdownRemark = INode & {
   __typename?: 'MarkdownRemark',
  id: Scalars['ID'],
  frontmatter?: Maybe<IMarkdownRemarkFrontmatter>,
  excerpt?: Maybe<Scalars['String']>,
  rawMarkdownBody?: Maybe<Scalars['String']>,
  fileAbsolutePath?: Maybe<Scalars['String']>,
  html?: Maybe<Scalars['String']>,
  htmlAst?: Maybe<Scalars['JSON']>,
  excerptAst?: Maybe<Scalars['JSON']>,
  headings?: Maybe<Array<Maybe<IMarkdownHeading>>>,
  timeToRead?: Maybe<Scalars['Int']>,
  tableOfContents?: Maybe<Scalars['String']>,
  wordCount?: Maybe<IMarkdownWordCount>,
  headingsDetail?: Maybe<Array<Maybe<IMarkdownHeadingDetail>>>,
  parent?: Maybe<INode>,
  children: Array<INode>,
  internal: IInternal,
};


export type IMarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>,
  truncate?: Maybe<Scalars['Boolean']>,
  format?: Maybe<IMarkdownExcerptFormats>
};


export type IMarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>,
  truncate?: Maybe<Scalars['Boolean']>
};


export type IMarkdownRemarkHeadingsArgs = {
  depth?: Maybe<IMarkdownHeadingLevels>
};


export type IMarkdownRemarkTableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>,
  pathToSlugField?: Maybe<Scalars['String']>,
  maxDepth?: Maybe<Scalars['Int']>,
  heading?: Maybe<Scalars['String']>
};

export type IMarkdownRemarkConnection = {
   __typename?: 'MarkdownRemarkConnection',
  totalCount: Scalars['Int'],
  edges: Array<IMarkdownRemarkEdge>,
  nodes: Array<IMarkdownRemark>,
  pageInfo: IPageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<IMarkdownRemarkGroupConnection>,
};


export type IMarkdownRemarkConnectionDistinctArgs = {
  field: IMarkdownRemarkFieldsEnum
};


export type IMarkdownRemarkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: IMarkdownRemarkFieldsEnum
};

export type IMarkdownRemarkEdge = {
   __typename?: 'MarkdownRemarkEdge',
  next?: Maybe<IMarkdownRemark>,
  node: IMarkdownRemark,
  previous?: Maybe<IMarkdownRemark>,
};

export enum IMarkdownRemarkFieldsEnum {
  Id = 'id',
  FrontmatterTitle = 'frontmatter___title',
  FrontmatterDate = 'frontmatter___date',
  FrontmatterTags = 'frontmatter___tags',
  FrontmatterKeywords = 'frontmatter___keywords',
  FrontmatterSlug = 'frontmatter___slug',
  FrontmatterDescription = 'frontmatter___description',
  FrontmatterKeyword = 'frontmatter___keyword',
  Excerpt = 'excerpt',
  RawMarkdownBody = 'rawMarkdownBody',
  FileAbsolutePath = 'fileAbsolutePath',
  Html = 'html',
  HtmlAst = 'htmlAst',
  ExcerptAst = 'excerptAst',
  Headings = 'headings',
  HeadingsValue = 'headings___value',
  HeadingsDepth = 'headings___depth',
  TimeToRead = 'timeToRead',
  TableOfContents = 'tableOfContents',
  WordCountParagraphs = 'wordCount___paragraphs',
  WordCountSentences = 'wordCount___sentences',
  WordCountWords = 'wordCount___words',
  HeadingsDetail = 'headingsDetail',
  HeadingsDetailValue = 'headingsDetail___value',
  HeadingsDetailId = 'headingsDetail___id',
  HeadingsDetailDepth = 'headingsDetail___depth',
  HeadingsDetailParents = 'headingsDetail___parents',
  HeadingsDetailParentsValue = 'headingsDetail___parents___value',
  HeadingsDetailParentsId = 'headingsDetail___parents___id',
  HeadingsDetailParentsDepth = 'headingsDetail___parents___depth',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type IMarkdownRemarkFilterInput = {
  id?: Maybe<IStringQueryOperatorInput>,
  frontmatter?: Maybe<IMarkdownRemarkFrontmatterFilterInput>,
  excerpt?: Maybe<IStringQueryOperatorInput>,
  rawMarkdownBody?: Maybe<IStringQueryOperatorInput>,
  fileAbsolutePath?: Maybe<IStringQueryOperatorInput>,
  html?: Maybe<IStringQueryOperatorInput>,
  htmlAst?: Maybe<IJsonQueryOperatorInput>,
  excerptAst?: Maybe<IJsonQueryOperatorInput>,
  headings?: Maybe<IMarkdownHeadingFilterListInput>,
  timeToRead?: Maybe<IIntQueryOperatorInput>,
  tableOfContents?: Maybe<IStringQueryOperatorInput>,
  wordCount?: Maybe<IMarkdownWordCountFilterInput>,
  headingsDetail?: Maybe<IMarkdownHeadingDetailFilterListInput>,
  parent?: Maybe<INodeFilterInput>,
  children?: Maybe<INodeFilterListInput>,
  internal?: Maybe<IInternalFilterInput>,
};

export type IMarkdownRemarkFrontmatter = {
   __typename?: 'MarkdownRemarkFrontmatter',
  title?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Date']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>,
  slug?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  keyword?: Maybe<Array<Maybe<Scalars['String']>>>,
};


export type IMarkdownRemarkFrontmatterDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type IMarkdownRemarkFrontmatterFilterInput = {
  title?: Maybe<IStringQueryOperatorInput>,
  date?: Maybe<IDateQueryOperatorInput>,
  tags?: Maybe<IStringQueryOperatorInput>,
  keywords?: Maybe<IStringQueryOperatorInput>,
  slug?: Maybe<IStringQueryOperatorInput>,
  description?: Maybe<IStringQueryOperatorInput>,
  keyword?: Maybe<IStringQueryOperatorInput>,
};

export type IMarkdownRemarkGroupConnection = {
   __typename?: 'MarkdownRemarkGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<IMarkdownRemarkEdge>,
  nodes: Array<IMarkdownRemark>,
  pageInfo: IPageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type IMarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<IMarkdownRemarkFieldsEnum>>>,
  order?: Maybe<Array<Maybe<ISortOrderEnum>>>,
};

export type IMarkdownWordCount = {
   __typename?: 'MarkdownWordCount',
  paragraphs?: Maybe<Scalars['Int']>,
  sentences?: Maybe<Scalars['Int']>,
  words?: Maybe<Scalars['Int']>,
};

export type IMarkdownWordCountFilterInput = {
  paragraphs?: Maybe<IIntQueryOperatorInput>,
  sentences?: Maybe<IIntQueryOperatorInput>,
  words?: Maybe<IIntQueryOperatorInput>,
};

export type INode = {
  id: Scalars['ID'],
  parent?: Maybe<INode>,
  children: Array<INode>,
  internal: IInternal,
};

export type INodeFilterInput = {
  id?: Maybe<IStringQueryOperatorInput>,
  parent?: Maybe<INodeFilterInput>,
  children?: Maybe<INodeFilterListInput>,
  internal?: Maybe<IInternalFilterInput>,
};

export type INodeFilterListInput = {
  elemMatch?: Maybe<INodeFilterInput>,
};

export type IPageInfo = {
   __typename?: 'PageInfo',
  currentPage: Scalars['Int'],
  hasPreviousPage: Scalars['Boolean'],
  hasNextPage: Scalars['Boolean'],
  itemCount: Scalars['Int'],
  pageCount: Scalars['Int'],
  perPage?: Maybe<Scalars['Int']>,
};

export type IQuery = {
   __typename?: 'Query',
  file?: Maybe<IFile>,
  allFile: IFileConnection,
  directory?: Maybe<IDirectory>,
  allDirectory: IDirectoryConnection,
  markdownRemark?: Maybe<IMarkdownRemark>,
  allMarkdownRemark: IMarkdownRemarkConnection,
  site?: Maybe<ISite>,
  allSite: ISiteConnection,
  sitePlugin?: Maybe<ISitePlugin>,
  allSitePlugin: ISitePluginConnection,
  sitePage?: Maybe<ISitePage>,
  allSitePage: ISitePageConnection,
};


export type IQueryFileArgs = {
  sourceInstanceName?: Maybe<IStringQueryOperatorInput>,
  absolutePath?: Maybe<IStringQueryOperatorInput>,
  relativePath?: Maybe<IStringQueryOperatorInput>,
  extension?: Maybe<IStringQueryOperatorInput>,
  size?: Maybe<IIntQueryOperatorInput>,
  prettySize?: Maybe<IStringQueryOperatorInput>,
  modifiedTime?: Maybe<IDateQueryOperatorInput>,
  accessTime?: Maybe<IDateQueryOperatorInput>,
  changeTime?: Maybe<IDateQueryOperatorInput>,
  birthTime?: Maybe<IDateQueryOperatorInput>,
  root?: Maybe<IStringQueryOperatorInput>,
  dir?: Maybe<IStringQueryOperatorInput>,
  base?: Maybe<IStringQueryOperatorInput>,
  ext?: Maybe<IStringQueryOperatorInput>,
  name?: Maybe<IStringQueryOperatorInput>,
  relativeDirectory?: Maybe<IStringQueryOperatorInput>,
  dev?: Maybe<IIntQueryOperatorInput>,
  mode?: Maybe<IIntQueryOperatorInput>,
  nlink?: Maybe<IIntQueryOperatorInput>,
  uid?: Maybe<IIntQueryOperatorInput>,
  gid?: Maybe<IIntQueryOperatorInput>,
  rdev?: Maybe<IIntQueryOperatorInput>,
  ino?: Maybe<IFloatQueryOperatorInput>,
  atimeMs?: Maybe<IFloatQueryOperatorInput>,
  mtimeMs?: Maybe<IFloatQueryOperatorInput>,
  ctimeMs?: Maybe<IFloatQueryOperatorInput>,
  atime?: Maybe<IDateQueryOperatorInput>,
  mtime?: Maybe<IDateQueryOperatorInput>,
  ctime?: Maybe<IDateQueryOperatorInput>,
  birthtime?: Maybe<IDateQueryOperatorInput>,
  birthtimeMs?: Maybe<IFloatQueryOperatorInput>,
  blksize?: Maybe<IIntQueryOperatorInput>,
  blocks?: Maybe<IIntQueryOperatorInput>,
  publicURL?: Maybe<IStringQueryOperatorInput>,
  id?: Maybe<IStringQueryOperatorInput>,
  parent?: Maybe<INodeFilterInput>,
  children?: Maybe<INodeFilterListInput>,
  internal?: Maybe<IInternalFilterInput>,
  childMarkdownRemark?: Maybe<IMarkdownRemarkFilterInput>
};


export type IQueryAllFileArgs = {
  filter?: Maybe<IFileFilterInput>,
  sort?: Maybe<IFileSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type IQueryDirectoryArgs = {
  sourceInstanceName?: Maybe<IStringQueryOperatorInput>,
  absolutePath?: Maybe<IStringQueryOperatorInput>,
  relativePath?: Maybe<IStringQueryOperatorInput>,
  extension?: Maybe<IStringQueryOperatorInput>,
  size?: Maybe<IIntQueryOperatorInput>,
  prettySize?: Maybe<IStringQueryOperatorInput>,
  modifiedTime?: Maybe<IDateQueryOperatorInput>,
  accessTime?: Maybe<IDateQueryOperatorInput>,
  changeTime?: Maybe<IDateQueryOperatorInput>,
  birthTime?: Maybe<IDateQueryOperatorInput>,
  root?: Maybe<IStringQueryOperatorInput>,
  dir?: Maybe<IStringQueryOperatorInput>,
  base?: Maybe<IStringQueryOperatorInput>,
  ext?: Maybe<IStringQueryOperatorInput>,
  name?: Maybe<IStringQueryOperatorInput>,
  relativeDirectory?: Maybe<IStringQueryOperatorInput>,
  dev?: Maybe<IIntQueryOperatorInput>,
  mode?: Maybe<IIntQueryOperatorInput>,
  nlink?: Maybe<IIntQueryOperatorInput>,
  uid?: Maybe<IIntQueryOperatorInput>,
  gid?: Maybe<IIntQueryOperatorInput>,
  rdev?: Maybe<IIntQueryOperatorInput>,
  ino?: Maybe<IFloatQueryOperatorInput>,
  atimeMs?: Maybe<IFloatQueryOperatorInput>,
  mtimeMs?: Maybe<IFloatQueryOperatorInput>,
  ctimeMs?: Maybe<IFloatQueryOperatorInput>,
  atime?: Maybe<IDateQueryOperatorInput>,
  mtime?: Maybe<IDateQueryOperatorInput>,
  ctime?: Maybe<IDateQueryOperatorInput>,
  birthtime?: Maybe<IDateQueryOperatorInput>,
  birthtimeMs?: Maybe<IFloatQueryOperatorInput>,
  blksize?: Maybe<IIntQueryOperatorInput>,
  blocks?: Maybe<IIntQueryOperatorInput>,
  id?: Maybe<IStringQueryOperatorInput>,
  parent?: Maybe<INodeFilterInput>,
  children?: Maybe<INodeFilterListInput>,
  internal?: Maybe<IInternalFilterInput>
};


export type IQueryAllDirectoryArgs = {
  filter?: Maybe<IDirectoryFilterInput>,
  sort?: Maybe<IDirectorySortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type IQueryMarkdownRemarkArgs = {
  id?: Maybe<IStringQueryOperatorInput>,
  frontmatter?: Maybe<IMarkdownRemarkFrontmatterFilterInput>,
  excerpt?: Maybe<IStringQueryOperatorInput>,
  rawMarkdownBody?: Maybe<IStringQueryOperatorInput>,
  fileAbsolutePath?: Maybe<IStringQueryOperatorInput>,
  html?: Maybe<IStringQueryOperatorInput>,
  htmlAst?: Maybe<IJsonQueryOperatorInput>,
  excerptAst?: Maybe<IJsonQueryOperatorInput>,
  headings?: Maybe<IMarkdownHeadingFilterListInput>,
  timeToRead?: Maybe<IIntQueryOperatorInput>,
  tableOfContents?: Maybe<IStringQueryOperatorInput>,
  wordCount?: Maybe<IMarkdownWordCountFilterInput>,
  headingsDetail?: Maybe<IMarkdownHeadingDetailFilterListInput>,
  parent?: Maybe<INodeFilterInput>,
  children?: Maybe<INodeFilterListInput>,
  internal?: Maybe<IInternalFilterInput>
};


export type IQueryAllMarkdownRemarkArgs = {
  filter?: Maybe<IMarkdownRemarkFilterInput>,
  sort?: Maybe<IMarkdownRemarkSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type IQuerySiteArgs = {
  id?: Maybe<IStringQueryOperatorInput>,
  parent?: Maybe<INodeFilterInput>,
  children?: Maybe<INodeFilterListInput>,
  internal?: Maybe<IInternalFilterInput>,
  siteMetadata?: Maybe<ISiteSiteMetadataFilterInput>,
  port?: Maybe<IIntQueryOperatorInput>,
  host?: Maybe<IStringQueryOperatorInput>,
  polyfill?: Maybe<IBooleanQueryOperatorInput>,
  pathPrefix?: Maybe<IStringQueryOperatorInput>,
  buildTime?: Maybe<IDateQueryOperatorInput>
};


export type IQueryAllSiteArgs = {
  filter?: Maybe<ISiteFilterInput>,
  sort?: Maybe<ISiteSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type IQuerySitePluginArgs = {
  id?: Maybe<IStringQueryOperatorInput>,
  parent?: Maybe<INodeFilterInput>,
  children?: Maybe<INodeFilterListInput>,
  internal?: Maybe<IInternalFilterInput>,
  resolve?: Maybe<IStringQueryOperatorInput>,
  name?: Maybe<IStringQueryOperatorInput>,
  version?: Maybe<IStringQueryOperatorInput>,
  pluginOptions?: Maybe<ISitePluginPluginOptionsFilterInput>,
  nodeAPIs?: Maybe<IStringQueryOperatorInput>,
  browserAPIs?: Maybe<IStringQueryOperatorInput>,
  ssrAPIs?: Maybe<IStringQueryOperatorInput>,
  pluginFilepath?: Maybe<IStringQueryOperatorInput>,
  packageJson?: Maybe<ISitePluginPackageJsonFilterInput>
};


export type IQueryAllSitePluginArgs = {
  filter?: Maybe<ISitePluginFilterInput>,
  sort?: Maybe<ISitePluginSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type IQuerySitePageArgs = {
  id?: Maybe<IStringQueryOperatorInput>,
  parent?: Maybe<INodeFilterInput>,
  children?: Maybe<INodeFilterListInput>,
  internal?: Maybe<IInternalFilterInput>,
  path?: Maybe<IStringQueryOperatorInput>,
  internalComponentName?: Maybe<IStringQueryOperatorInput>,
  component?: Maybe<IStringQueryOperatorInput>,
  componentChunkName?: Maybe<IStringQueryOperatorInput>,
  isCreatedByStatefulCreatePages?: Maybe<IBooleanQueryOperatorInput>,
  context?: Maybe<ISitePageContextFilterInput>,
  pluginCreator?: Maybe<ISitePluginFilterInput>,
  pluginCreatorId?: Maybe<IStringQueryOperatorInput>,
  componentPath?: Maybe<IStringQueryOperatorInput>
};


export type IQueryAllSitePageArgs = {
  filter?: Maybe<ISitePageFilterInput>,
  sort?: Maybe<ISitePageSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};

export type ISite = INode & {
   __typename?: 'Site',
  id: Scalars['ID'],
  parent?: Maybe<INode>,
  children: Array<INode>,
  internal: IInternal,
  siteMetadata?: Maybe<ISiteSiteMetadata>,
  port?: Maybe<Scalars['Int']>,
  host?: Maybe<Scalars['String']>,
  polyfill?: Maybe<Scalars['Boolean']>,
  pathPrefix?: Maybe<Scalars['String']>,
  buildTime?: Maybe<Scalars['Date']>,
};


export type ISiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type ISiteConnection = {
   __typename?: 'SiteConnection',
  totalCount: Scalars['Int'],
  edges: Array<ISiteEdge>,
  nodes: Array<ISite>,
  pageInfo: IPageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ISiteGroupConnection>,
};


export type ISiteConnectionDistinctArgs = {
  field: ISiteFieldsEnum
};


export type ISiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ISiteFieldsEnum
};

export type ISiteEdge = {
   __typename?: 'SiteEdge',
  next?: Maybe<ISite>,
  node: ISite,
  previous?: Maybe<ISite>,
};

export enum ISiteFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  SiteMetadataTitle = 'siteMetadata___title',
  SiteMetadataAuthors = 'siteMetadata___authors',
  SiteMetadataAuthorsName = 'siteMetadata___authors___name',
  SiteMetadataAuthorsSlug = 'siteMetadata___authors___slug',
  Port = 'port',
  Host = 'host',
  Polyfill = 'polyfill',
  PathPrefix = 'pathPrefix',
  BuildTime = 'buildTime'
}

export type ISiteFilterInput = {
  id?: Maybe<IStringQueryOperatorInput>,
  parent?: Maybe<INodeFilterInput>,
  children?: Maybe<INodeFilterListInput>,
  internal?: Maybe<IInternalFilterInput>,
  siteMetadata?: Maybe<ISiteSiteMetadataFilterInput>,
  port?: Maybe<IIntQueryOperatorInput>,
  host?: Maybe<IStringQueryOperatorInput>,
  polyfill?: Maybe<IBooleanQueryOperatorInput>,
  pathPrefix?: Maybe<IStringQueryOperatorInput>,
  buildTime?: Maybe<IDateQueryOperatorInput>,
};

export type ISiteGroupConnection = {
   __typename?: 'SiteGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<ISiteEdge>,
  nodes: Array<ISite>,
  pageInfo: IPageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ISitePage = INode & {
   __typename?: 'SitePage',
  id: Scalars['ID'],
  parent?: Maybe<INode>,
  children: Array<INode>,
  internal: IInternal,
  path?: Maybe<Scalars['String']>,
  internalComponentName?: Maybe<Scalars['String']>,
  component?: Maybe<Scalars['String']>,
  componentChunkName?: Maybe<Scalars['String']>,
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>,
  context?: Maybe<ISitePageContext>,
  pluginCreator?: Maybe<ISitePlugin>,
  pluginCreatorId?: Maybe<Scalars['String']>,
  componentPath?: Maybe<Scalars['String']>,
};

export type ISitePageConnection = {
   __typename?: 'SitePageConnection',
  totalCount: Scalars['Int'],
  edges: Array<ISitePageEdge>,
  nodes: Array<ISitePage>,
  pageInfo: IPageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ISitePageGroupConnection>,
};


export type ISitePageConnectionDistinctArgs = {
  field: ISitePageFieldsEnum
};


export type ISitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ISitePageFieldsEnum
};

export type ISitePageContext = {
   __typename?: 'SitePageContext',
  slug?: Maybe<Scalars['String']>,
  previous?: Maybe<ISitePageContextPrevious>,
  next?: Maybe<ISitePageContextNext>,
};

export type ISitePageContextFilterInput = {
  slug?: Maybe<IStringQueryOperatorInput>,
  previous?: Maybe<ISitePageContextPreviousFilterInput>,
  next?: Maybe<ISitePageContextNextFilterInput>,
};

export type ISitePageContextNext = {
   __typename?: 'SitePageContextNext',
  frontmatter?: Maybe<ISitePageContextNextFrontmatter>,
};

export type ISitePageContextNextFilterInput = {
  frontmatter?: Maybe<ISitePageContextNextFrontmatterFilterInput>,
};

export type ISitePageContextNextFrontmatter = {
   __typename?: 'SitePageContextNextFrontmatter',
  date?: Maybe<Scalars['Date']>,
  description?: Maybe<Scalars['String']>,
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>,
  slug?: Maybe<Scalars['String']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  title?: Maybe<Scalars['String']>,
};

export type ISitePageContextNextFrontmatterFilterInput = {
  date?: Maybe<IDateQueryOperatorInput>,
  description?: Maybe<IStringQueryOperatorInput>,
  keywords?: Maybe<IStringQueryOperatorInput>,
  slug?: Maybe<IStringQueryOperatorInput>,
  tags?: Maybe<IStringQueryOperatorInput>,
  title?: Maybe<IStringQueryOperatorInput>,
};

export type ISitePageContextPrevious = {
   __typename?: 'SitePageContextPrevious',
  frontmatter?: Maybe<ISitePageContextPreviousFrontmatter>,
};

export type ISitePageContextPreviousFilterInput = {
  frontmatter?: Maybe<ISitePageContextPreviousFrontmatterFilterInput>,
};

export type ISitePageContextPreviousFrontmatter = {
   __typename?: 'SitePageContextPreviousFrontmatter',
  date?: Maybe<Scalars['Date']>,
  description?: Maybe<Scalars['String']>,
  keyword?: Maybe<Array<Maybe<Scalars['String']>>>,
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>,
  slug?: Maybe<Scalars['String']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  title?: Maybe<Scalars['String']>,
};

export type ISitePageContextPreviousFrontmatterFilterInput = {
  date?: Maybe<IDateQueryOperatorInput>,
  description?: Maybe<IStringQueryOperatorInput>,
  keyword?: Maybe<IStringQueryOperatorInput>,
  keywords?: Maybe<IStringQueryOperatorInput>,
  slug?: Maybe<IStringQueryOperatorInput>,
  tags?: Maybe<IStringQueryOperatorInput>,
  title?: Maybe<IStringQueryOperatorInput>,
};

export type ISitePageEdge = {
   __typename?: 'SitePageEdge',
  next?: Maybe<ISitePage>,
  node: ISitePage,
  previous?: Maybe<ISitePage>,
};

export enum ISitePageFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Path = 'path',
  InternalComponentName = 'internalComponentName',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  ContextSlug = 'context___slug',
  ContextPreviousFrontmatterDate = 'context___previous___frontmatter___date',
  ContextPreviousFrontmatterDescription = 'context___previous___frontmatter___description',
  ContextPreviousFrontmatterKeyword = 'context___previous___frontmatter___keyword',
  ContextPreviousFrontmatterKeywords = 'context___previous___frontmatter___keywords',
  ContextPreviousFrontmatterSlug = 'context___previous___frontmatter___slug',
  ContextPreviousFrontmatterTags = 'context___previous___frontmatter___tags',
  ContextPreviousFrontmatterTitle = 'context___previous___frontmatter___title',
  ContextNextFrontmatterDate = 'context___next___frontmatter___date',
  ContextNextFrontmatterDescription = 'context___next___frontmatter___description',
  ContextNextFrontmatterKeywords = 'context___next___frontmatter___keywords',
  ContextNextFrontmatterSlug = 'context___next___frontmatter___slug',
  ContextNextFrontmatterTags = 'context___next___frontmatter___tags',
  ContextNextFrontmatterTitle = 'context___next___frontmatter___title',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorVersion = 'pluginCreator___version',
  PluginCreatorPluginOptionsPlugins = 'pluginCreator___pluginOptions___plugins',
  PluginCreatorPluginOptionsPluginsResolve = 'pluginCreator___pluginOptions___plugins___resolve',
  PluginCreatorPluginOptionsPluginsId = 'pluginCreator___pluginOptions___plugins___id',
  PluginCreatorPluginOptionsPluginsName = 'pluginCreator___pluginOptions___plugins___name',
  PluginCreatorPluginOptionsPluginsVersion = 'pluginCreator___pluginOptions___plugins___version',
  PluginCreatorPluginOptionsPluginsBrowserApIs = 'pluginCreator___pluginOptions___plugins___browserAPIs',
  PluginCreatorPluginOptionsPluginsSsrApIs = 'pluginCreator___pluginOptions___plugins___ssrAPIs',
  PluginCreatorPluginOptionsPluginsPluginFilepath = 'pluginCreator___pluginOptions___plugins___pluginFilepath',
  PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsClassPrefix = 'pluginCreator___pluginOptions___classPrefix',
  PluginCreatorPluginOptionsShowLineNumbers = 'pluginCreator___pluginOptions___showLineNumbers',
  PluginCreatorPluginOptionsNoInlineHighlight = 'pluginCreator___pluginOptions___noInlineHighlight',
  PluginCreatorPluginOptionsOffsetY = 'pluginCreator___pluginOptions___offsetY',
  PluginCreatorPluginOptionsIcon = 'pluginCreator___pluginOptions___icon',
  PluginCreatorPluginOptionsClassName = 'pluginCreator___pluginOptions___className',
  PluginCreatorPluginOptionsIgnoreFileExtensions = 'pluginCreator___pluginOptions___ignoreFileExtensions',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonAuthor = 'pluginCreator___packageJson___author',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath'
}

export type ISitePageFilterInput = {
  id?: Maybe<IStringQueryOperatorInput>,
  parent?: Maybe<INodeFilterInput>,
  children?: Maybe<INodeFilterListInput>,
  internal?: Maybe<IInternalFilterInput>,
  path?: Maybe<IStringQueryOperatorInput>,
  internalComponentName?: Maybe<IStringQueryOperatorInput>,
  component?: Maybe<IStringQueryOperatorInput>,
  componentChunkName?: Maybe<IStringQueryOperatorInput>,
  isCreatedByStatefulCreatePages?: Maybe<IBooleanQueryOperatorInput>,
  context?: Maybe<ISitePageContextFilterInput>,
  pluginCreator?: Maybe<ISitePluginFilterInput>,
  pluginCreatorId?: Maybe<IStringQueryOperatorInput>,
  componentPath?: Maybe<IStringQueryOperatorInput>,
};

export type ISitePageGroupConnection = {
   __typename?: 'SitePageGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<ISitePageEdge>,
  nodes: Array<ISitePage>,
  pageInfo: IPageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ISitePageSortInput = {
  fields?: Maybe<Array<Maybe<ISitePageFieldsEnum>>>,
  order?: Maybe<Array<Maybe<ISortOrderEnum>>>,
};

export type ISitePlugin = INode & {
   __typename?: 'SitePlugin',
  id: Scalars['ID'],
  parent?: Maybe<INode>,
  children: Array<INode>,
  internal: IInternal,
  resolve?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  pluginOptions?: Maybe<ISitePluginPluginOptions>,
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  pluginFilepath?: Maybe<Scalars['String']>,
  packageJson?: Maybe<ISitePluginPackageJson>,
};

export type ISitePluginConnection = {
   __typename?: 'SitePluginConnection',
  totalCount: Scalars['Int'],
  edges: Array<ISitePluginEdge>,
  nodes: Array<ISitePlugin>,
  pageInfo: IPageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ISitePluginGroupConnection>,
};


export type ISitePluginConnectionDistinctArgs = {
  field: ISitePluginFieldsEnum
};


export type ISitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ISitePluginFieldsEnum
};

export type ISitePluginEdge = {
   __typename?: 'SitePluginEdge',
  next?: Maybe<ISitePlugin>,
  node: ISitePlugin,
  previous?: Maybe<ISitePlugin>,
};

export enum ISitePluginFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Resolve = 'resolve',
  Name = 'name',
  Version = 'version',
  PluginOptionsPlugins = 'pluginOptions___plugins',
  PluginOptionsPluginsResolve = 'pluginOptions___plugins___resolve',
  PluginOptionsPluginsId = 'pluginOptions___plugins___id',
  PluginOptionsPluginsName = 'pluginOptions___plugins___name',
  PluginOptionsPluginsVersion = 'pluginOptions___plugins___version',
  PluginOptionsPluginsPluginOptionsClassPrefix = 'pluginOptions___plugins___pluginOptions___classPrefix',
  PluginOptionsPluginsPluginOptionsShowLineNumbers = 'pluginOptions___plugins___pluginOptions___showLineNumbers',
  PluginOptionsPluginsPluginOptionsNoInlineHighlight = 'pluginOptions___plugins___pluginOptions___noInlineHighlight',
  PluginOptionsPluginsPluginOptionsOffsetY = 'pluginOptions___plugins___pluginOptions___offsetY',
  PluginOptionsPluginsPluginOptionsIcon = 'pluginOptions___plugins___pluginOptions___icon',
  PluginOptionsPluginsPluginOptionsClassName = 'pluginOptions___plugins___pluginOptions___className',
  PluginOptionsPluginsPluginOptionsIgnoreFileExtensions = 'pluginOptions___plugins___pluginOptions___ignoreFileExtensions',
  PluginOptionsPluginsBrowserApIs = 'pluginOptions___plugins___browserAPIs',
  PluginOptionsPluginsSsrApIs = 'pluginOptions___plugins___ssrAPIs',
  PluginOptionsPluginsPluginFilepath = 'pluginOptions___plugins___pluginFilepath',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsClassPrefix = 'pluginOptions___classPrefix',
  PluginOptionsShowLineNumbers = 'pluginOptions___showLineNumbers',
  PluginOptionsNoInlineHighlight = 'pluginOptions___noInlineHighlight',
  PluginOptionsOffsetY = 'pluginOptions___offsetY',
  PluginOptionsIcon = 'pluginOptions___icon',
  PluginOptionsClassName = 'pluginOptions___className',
  PluginOptionsIgnoreFileExtensions = 'pluginOptions___ignoreFileExtensions',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords'
}

export type ISitePluginFilterInput = {
  id?: Maybe<IStringQueryOperatorInput>,
  parent?: Maybe<INodeFilterInput>,
  children?: Maybe<INodeFilterListInput>,
  internal?: Maybe<IInternalFilterInput>,
  resolve?: Maybe<IStringQueryOperatorInput>,
  name?: Maybe<IStringQueryOperatorInput>,
  version?: Maybe<IStringQueryOperatorInput>,
  pluginOptions?: Maybe<ISitePluginPluginOptionsFilterInput>,
  nodeAPIs?: Maybe<IStringQueryOperatorInput>,
  browserAPIs?: Maybe<IStringQueryOperatorInput>,
  ssrAPIs?: Maybe<IStringQueryOperatorInput>,
  pluginFilepath?: Maybe<IStringQueryOperatorInput>,
  packageJson?: Maybe<ISitePluginPackageJsonFilterInput>,
};

export type ISitePluginGroupConnection = {
   __typename?: 'SitePluginGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<ISitePluginEdge>,
  nodes: Array<ISitePlugin>,
  pageInfo: IPageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ISitePluginPackageJson = {
   __typename?: 'SitePluginPackageJson',
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  main?: Maybe<Scalars['String']>,
  author?: Maybe<Scalars['String']>,
  license?: Maybe<Scalars['String']>,
  dependencies?: Maybe<Array<Maybe<ISitePluginPackageJsonDependencies>>>,
  devDependencies?: Maybe<Array<Maybe<ISitePluginPackageJsonDevDependencies>>>,
  peerDependencies?: Maybe<Array<Maybe<ISitePluginPackageJsonPeerDependencies>>>,
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type ISitePluginPackageJsonDependencies = {
   __typename?: 'SitePluginPackageJsonDependencies',
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type ISitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<IStringQueryOperatorInput>,
  version?: Maybe<IStringQueryOperatorInput>,
};

export type ISitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<ISitePluginPackageJsonDependenciesFilterInput>,
};

export type ISitePluginPackageJsonDevDependencies = {
   __typename?: 'SitePluginPackageJsonDevDependencies',
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type ISitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<IStringQueryOperatorInput>,
  version?: Maybe<IStringQueryOperatorInput>,
};

export type ISitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<ISitePluginPackageJsonDevDependenciesFilterInput>,
};

export type ISitePluginPackageJsonFilterInput = {
  name?: Maybe<IStringQueryOperatorInput>,
  description?: Maybe<IStringQueryOperatorInput>,
  version?: Maybe<IStringQueryOperatorInput>,
  main?: Maybe<IStringQueryOperatorInput>,
  author?: Maybe<IStringQueryOperatorInput>,
  license?: Maybe<IStringQueryOperatorInput>,
  dependencies?: Maybe<ISitePluginPackageJsonDependenciesFilterListInput>,
  devDependencies?: Maybe<ISitePluginPackageJsonDevDependenciesFilterListInput>,
  peerDependencies?: Maybe<ISitePluginPackageJsonPeerDependenciesFilterListInput>,
  keywords?: Maybe<IStringQueryOperatorInput>,
};

export type ISitePluginPackageJsonPeerDependencies = {
   __typename?: 'SitePluginPackageJsonPeerDependencies',
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type ISitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<IStringQueryOperatorInput>,
  version?: Maybe<IStringQueryOperatorInput>,
};

export type ISitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<ISitePluginPackageJsonPeerDependenciesFilterInput>,
};

export type ISitePluginPluginOptions = {
   __typename?: 'SitePluginPluginOptions',
  plugins?: Maybe<Array<Maybe<ISitePluginPluginOptionsPlugins>>>,
  name?: Maybe<Scalars['String']>,
  path?: Maybe<Scalars['String']>,
  classPrefix?: Maybe<Scalars['String']>,
  showLineNumbers?: Maybe<Scalars['Boolean']>,
  noInlineHighlight?: Maybe<Scalars['Boolean']>,
  offsetY?: Maybe<Scalars['String']>,
  icon?: Maybe<Scalars['String']>,
  className?: Maybe<Scalars['String']>,
  ignoreFileExtensions?: Maybe<Array<Maybe<Scalars['String']>>>,
  pathCheck?: Maybe<Scalars['Boolean']>,
};

export type ISitePluginPluginOptionsFilterInput = {
  plugins?: Maybe<ISitePluginPluginOptionsPluginsFilterListInput>,
  name?: Maybe<IStringQueryOperatorInput>,
  path?: Maybe<IStringQueryOperatorInput>,
  classPrefix?: Maybe<IStringQueryOperatorInput>,
  showLineNumbers?: Maybe<IBooleanQueryOperatorInput>,
  noInlineHighlight?: Maybe<IBooleanQueryOperatorInput>,
  offsetY?: Maybe<IStringQueryOperatorInput>,
  icon?: Maybe<IStringQueryOperatorInput>,
  className?: Maybe<IStringQueryOperatorInput>,
  ignoreFileExtensions?: Maybe<IStringQueryOperatorInput>,
  pathCheck?: Maybe<IBooleanQueryOperatorInput>,
};

export type ISitePluginPluginOptionsPlugins = {
   __typename?: 'SitePluginPluginOptionsPlugins',
  resolve?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  pluginOptions?: Maybe<ISitePluginPluginOptionsPluginsPluginOptions>,
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  pluginFilepath?: Maybe<Scalars['String']>,
};

export type ISitePluginPluginOptionsPluginsFilterInput = {
  resolve?: Maybe<IStringQueryOperatorInput>,
  id?: Maybe<IStringQueryOperatorInput>,
  name?: Maybe<IStringQueryOperatorInput>,
  version?: Maybe<IStringQueryOperatorInput>,
  pluginOptions?: Maybe<ISitePluginPluginOptionsPluginsPluginOptionsFilterInput>,
  browserAPIs?: Maybe<IStringQueryOperatorInput>,
  ssrAPIs?: Maybe<IStringQueryOperatorInput>,
  pluginFilepath?: Maybe<IStringQueryOperatorInput>,
};

export type ISitePluginPluginOptionsPluginsFilterListInput = {
  elemMatch?: Maybe<ISitePluginPluginOptionsPluginsFilterInput>,
};

export type ISitePluginPluginOptionsPluginsPluginOptions = {
   __typename?: 'SitePluginPluginOptionsPluginsPluginOptions',
  classPrefix?: Maybe<Scalars['String']>,
  showLineNumbers?: Maybe<Scalars['Boolean']>,
  noInlineHighlight?: Maybe<Scalars['Boolean']>,
  offsetY?: Maybe<Scalars['String']>,
  icon?: Maybe<Scalars['String']>,
  className?: Maybe<Scalars['String']>,
  ignoreFileExtensions?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type ISitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
  classPrefix?: Maybe<IStringQueryOperatorInput>,
  showLineNumbers?: Maybe<IBooleanQueryOperatorInput>,
  noInlineHighlight?: Maybe<IBooleanQueryOperatorInput>,
  offsetY?: Maybe<IStringQueryOperatorInput>,
  icon?: Maybe<IStringQueryOperatorInput>,
  className?: Maybe<IStringQueryOperatorInput>,
  ignoreFileExtensions?: Maybe<IStringQueryOperatorInput>,
};

export type ISitePluginSortInput = {
  fields?: Maybe<Array<Maybe<ISitePluginFieldsEnum>>>,
  order?: Maybe<Array<Maybe<ISortOrderEnum>>>,
};

export type ISiteSiteMetadata = {
   __typename?: 'SiteSiteMetadata',
  title?: Maybe<Scalars['String']>,
  authors?: Maybe<Array<Maybe<ISiteSiteMetadataAuthors>>>,
};

export type ISiteSiteMetadataAuthors = {
   __typename?: 'SiteSiteMetadataAuthors',
  name?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
};

export type ISiteSiteMetadataAuthorsFilterInput = {
  name?: Maybe<IStringQueryOperatorInput>,
  slug?: Maybe<IStringQueryOperatorInput>,
};

export type ISiteSiteMetadataAuthorsFilterListInput = {
  elemMatch?: Maybe<ISiteSiteMetadataAuthorsFilterInput>,
};

export type ISiteSiteMetadataFilterInput = {
  title?: Maybe<IStringQueryOperatorInput>,
  authors?: Maybe<ISiteSiteMetadataAuthorsFilterListInput>,
};

export type ISiteSortInput = {
  fields?: Maybe<Array<Maybe<ISiteFieldsEnum>>>,
  order?: Maybe<Array<Maybe<ISortOrderEnum>>>,
};

export enum ISortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type IStringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
};

export type IIndexPageQueryVariables = {};


export type IIndexPageQuery = (
  { __typename?: 'Query' }
  & { site: Maybe<(
    { __typename?: 'Site' }
    & { siteMetadata: Maybe<(
      { __typename?: 'SiteSiteMetadata' }
      & Pick<ISiteSiteMetadata, 'title'>
    )> }
  )>, allMarkdownRemark: (
    { __typename?: 'MarkdownRemarkConnection' }
    & { edges: Array<(
      { __typename?: 'MarkdownRemarkEdge' }
      & { node: (
        { __typename?: 'MarkdownRemark' }
        & Pick<IMarkdownRemark, 'id'>
        & { frontmatter: Maybe<(
          { __typename?: 'MarkdownRemarkFrontmatter' }
          & Pick<IMarkdownRemarkFrontmatter, 'date' | 'description' | 'title' | 'tags' | 'slug'>
        )> }
      ) }
    )> }
  ) }
);

export type IPostsForCreatePagesQueryVariables = {};


export type IPostsForCreatePagesQuery = (
  { __typename?: 'Query' }
  & { allMarkdownRemark: (
    { __typename?: 'MarkdownRemarkConnection' }
    & { edges: Array<(
      { __typename?: 'MarkdownRemarkEdge' }
      & { node: (
        { __typename?: 'MarkdownRemark' }
        & { frontmatter: Maybe<(
          { __typename?: 'MarkdownRemarkFrontmatter' }
          & Pick<IMarkdownRemarkFrontmatter, 'date' | 'description' | 'keyword' | 'keywords' | 'slug' | 'tags' | 'title'>
        )> }
      ) }
    )> }
  ) }
);

export type IBlogPostQueryVariables = {
  slug: Scalars['String']
};


export type IBlogPostQuery = (
  { __typename?: 'Query' }
  & { markdownRemark: Maybe<(
    { __typename?: 'MarkdownRemark' }
    & Pick<IMarkdownRemark, 'id' | 'html'>
    & { frontmatter: Maybe<(
      { __typename?: 'MarkdownRemarkFrontmatter' }
      & Pick<IMarkdownRemarkFrontmatter, 'date' | 'description' | 'slug' | 'tags' | 'title'>
    )>, headingsDetail: Maybe<Array<Maybe<(
      { __typename?: 'MarkdownHeadingDetail' }
      & Pick<IMarkdownHeadingDetail, 'id' | 'value' | 'depth'>
      & { parents: Maybe<Array<Maybe<(
        { __typename?: 'MarkdownParentHeadingDetail' }
        & Pick<IMarkdownParentHeadingDetail, 'id' | 'value' | 'depth'>
      )>>> }
    )>>> }
  )> }
);
