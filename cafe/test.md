카페 사장임

1.메뉴 관리

- 메뉴 스키마: {name:string, price:number, kcal:number}
- 메뉴 조회: get /menus
- 메뉴 생성: post /menus
- 메뉴 삭제: delete /menus
- 메뉴 수정: put /menus

  2.직원 관리

- 직원 스키마: {name:string, age:number, position:string}
- 직원 조회: get /staffs
- 직원 생성: post /staffs
- 직원 삭제: delete /staffs
- 직원 수정: put /staffs

응답스키마

- 조회 성공 {status:ok, code: 200, data:[]}
- 생성 성공 {status:ok, code: 201, msg:[]}
- 에러 {status:error, code:400, error: { msg: "syrup 그렇게 먹으면 살찜" }}
