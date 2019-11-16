var N=null,E="",T="t",U="u",searchIndex={};
var R=["ssb_publish","result","to_owned","clone_into","try_from","try_into","borrow_mut","borrow","type_id","typeid","equivalent","ordering","content","formatter","multihash","partial_cmp","option","backtrace","decodelegacyerror","Multihash"];
searchIndex["ssb_publish"]={"doc":"Publish signed Secure Scuttlebutt (Ssb) Messages as Json","i":[[4,"Content",R[0],E,N,N],[13,"Encrypted",E,E,0,N],[13,"Plain",E,E,0,N],[3,R[19],E,"A multihash that owns its data.",N,N],[12,"0",E,E,1,N],[4,"Error",E,E,N,N],[13,"InvalidPreviousMessage",E,E,2,N],[12,"source","ssb_publish::Error",E,2,N],[12,"message",E,E,2,N],[13,"InvalidPublicKey",R[0],E,2,N],[13,"InvalidSecretKey",E,E,2,N],[13,"PreviousMessageAuthorIsIncorrect",E,E,2,N],[13,"LegacyJsonEncodeFailed",E,E,2,N],[5,"publish",E,"Publish a new message.",N,[[[R[16]],["f64"],[R[12]]],[[R[1],["error"]],["error"]]]],[11,R[2],E,E,0,[[["self"]],[T]]],[11,R[3],E,E,0,[[["self"],[T]]]],[11,"into",E,E,0,[[],[U]]],[11,"from",E,E,0,[[[T]],[T]]],[11,R[4],E,E,0,[[[U]],[R[1]]]],[11,R[5],E,E,0,[[],[R[1]]]],[11,R[6],E,E,0,[[["self"]],[T]]],[11,R[7],E,E,0,[[["self"]],[T]]],[11,R[8],E,E,0,[[["self"]],[R[9]]]],[11,R[10],E,E,0,[[["self"],["k"]],["bool"]]],[11,R[2],E,E,1,[[["self"]],[T]]],[11,R[3],E,E,1,[[["self"],[T]]]],[11,"into",E,E,1,[[],[U]]],[11,"from",E,E,1,[[[T]],[T]]],[11,R[4],E,E,1,[[[U]],[R[1]]]],[11,R[5],E,E,1,[[],[R[1]]]],[11,R[6],E,E,1,[[["self"]],[T]]],[11,R[7],E,E,1,[[["self"]],[T]]],[11,R[8],E,E,1,[[["self"]],[R[9]]]],[11,R[10],E,E,1,[[["self"],["k"]],["bool"]]],[11,"into",E,E,2,[[],[U]]],[11,"from",E,E,2,[[[T]],[T]]],[11,"to_string",E,E,2,[[["self"]],["string"]]],[11,R[4],E,E,2,[[[U]],[R[1]]]],[11,R[5],E,E,2,[[],[R[1]]]],[11,R[6],E,E,2,[[["self"]],[T]]],[11,R[7],E,E,2,[[["self"]],[T]]],[11,R[8],E,E,2,[[["self"]],[R[9]]]],[11,"as_error_source",E,E,2,[[["self"]],["error"]]],[11,R[15],E,E,0,[[["self"],[R[12]]],[[R[11]],[R[16],[R[11]]]]]],[11,"lt",E,E,0,[[["self"],[R[12]]],["bool"]]],[11,"le",E,E,0,[[["self"],[R[12]]],["bool"]]],[11,"gt",E,E,0,[[["self"],[R[12]]],["bool"]]],[11,"ge",E,E,0,[[["self"],[R[12]]],["bool"]]],[11,"cmp",E,E,0,[[["self"],[R[12]]],[R[11]]]],[11,"fmt",E,E,0,[[["self"],[R[13]]],[[R[1],["error"]],["error"]]]],[11,"clone",E,E,0,[[["self"]],[R[12]]]],[11,"eq",E,E,0,[[["self"],[R[12]]],["bool"]]],[11,"ne",E,E,0,[[["self"],[R[12]]],["bool"]]],[11,"fmt",E,E,1,[[["self"],[R[13]]],[[R[1],["error"]],["error"]]]],[11,"serialize",E,E,1,[[["self"],["s"]],[R[1]]]],[11,"deserialize",E,E,1,[[["d"]],[[R[14]],[R[1],[R[14]]]]]],[11,"clone",E,E,1,[[["self"]],[R[14]]]],[11,R[15],E,E,1,[[["self"],[R[14]]],[[R[11]],[R[16],[R[11]]]]]],[11,"lt",E,E,1,[[["self"],[R[14]]],["bool"]]],[11,"le",E,E,1,[[["self"],[R[14]]],["bool"]]],[11,"gt",E,E,1,[[["self"],[R[14]]],["bool"]]],[11,"ge",E,E,1,[[["self"],[R[14]]],["bool"]]],[11,"hash",E,E,1,[[["self"],["__h"]]]],[11,"cmp",E,E,1,[[["self"],[R[14]]],[R[11]]]],[11,"eq",E,E,1,[[["self"],[R[14]]],["bool"]]],[11,"ne",E,E,1,[[["self"],[R[14]]],["bool"]]],[11,"fmt",E,E,2,[[["self"],[R[13]]],[R[1]]]],[11,"fmt",E,E,2,[[["self"],[R[13]]],[R[1]]]],[11,"description",E,E,2,[[["self"]],["str"]]],[11,"cause",E,E,2,[[["self"]],[["error"],[R[16],["error"]]]]],[11,"source",E,E,2,[[["self"]],[[R[16],["error"]],["error"]]]],[11,R[17],E,E,2,[[["self"]],[[R[17]],[R[16],[R[17]]]]]],[11,"from_sha256",E,"Take a sha256 digest and turn it into an opaque `Multihash`.",1,[[["target"]],[R[14]]]],[11,"from_legacy",E,"Parses a legacy encoding into a `Multihash`.",1,[[],[[R[18]],[R[1],[R[18]]]]]],[11,"to_legacy",E,"Serialize a `Multihash` into a writer, using the legacy…",1,[[["self"],["w"]],[[R[1],["error"]],["error"]]]],[11,"to_legacy_vec",E,"Serialize a `Multihash` into an owned byte vector, using…",1,[[["self"]],[["vec",["u8"]],["u8"]]]],[11,"to_legacy_string",E,"Serialize a `Multihash` into an owned string, using the…",1,[[["self"]],["string"]]]],"p":[[4,"Content"],[3,R[19]],[4,"Error"]]};
initSearch(searchIndex);addSearchOptions(searchIndex);