---
title:        "java三种方式创建Excel"
description:  "java"
image:        "/img/background.jpg"
author:       "柚子"
---

# java三种方式创建Excel

```

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFCellStyle;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;

import ssp.common.exception.BizException;

/** 
 * 使用poi导出excel 
 */
public class ExcelUtil {
	/**
	 * @param filePath : 文件路径
	 * @param header : 表头
	 * @param rowData : 数据
	 */
	public static void exportExcel(String filePath,String[] header,List<List<?>> rowData){
		File file = new File(filePath) ;
		if(file.exists()){// 删除临时文件
			file.delete() ;
		}
		//创建  excel文件
		HSSFWorkbook wb = new HSSFWorkbook() ;
		//表样式
		HSSFCellStyle style=wb.createCellStyle();
		style.setAlignment(HSSFCellStyle.ALIGN_CENTER);
		style.setWrapText(true);
		// 创建sheet  每个数据表创建一个 sheet
		HSSFSheet sheet = wb.createSheet() ;
		sheet.autoSizeColumn(0);
		sheet.setDefaultColumnWidth(20);
		// 导出表头
		HSSFRow row = sheet.createRow(0) ;
		int idx = 0;
		for(String str : header){
			HSSFCell cell = row.createCell(idx++);
			cell.setCellValue(str) ;
			cell.setCellStyle(style);
		}	
		// 导出内容
		for(int i=0 ;i<rowData.size() ;i++){
			idx = 0 ;
			List<String> list = (List<String>) rowData.get(i) ;
			HSSFRow row1 = sheet.createRow(i+1) ;
			for(String str : list){
				HSSFCell cell = row1.createCell(idx++);
				//处理空值情况
				cell.setCellValue(str) ;
				cell.setCellStyle(style);
			}
		}
		// 生成  excel文件
		try {
			wb.write(new FileOutputStream(file)) ;
		} catch (FileNotFoundException e) {
			throw new BizException(e);
		} catch (IOException e) {
			throw new BizException(e);
		}
	}
	/**
	 * 表头动态生成
	 * @param filePath : 文件路径
	 * @param header : 表头
	 * @param rowData : 数据
	 */
	public static void exportExcel(String filePath,Map<String,String> header ,List<Map<String,?>> rowData){
		File file = new File(filePath) ;
		if(file.exists()){// 删除临时文件
			file.delete() ;
		}
		//创建  excel文件
		HSSFWorkbook wb = new HSSFWorkbook() ;
		//表样式
		HSSFCellStyle style=wb.createCellStyle();
		style.setAlignment(HSSFCellStyle.ALIGN_CENTER);
		style.setWrapText(true);
		// 创建sheet  每个数据表创建一个 sheet
		HSSFSheet sheet = wb.createSheet() ;
		sheet.autoSizeColumn(0);
		sheet.setDefaultColumnWidth(20);
		// 导出表头
		HSSFRow row = sheet.createRow(0) ;
		Set<String> setHeader = null ;
		int idx = 0;
		if(header != null){
			for(Map.Entry<String, String> entry : header.entrySet()){
				HSSFCell cell = row.createCell(idx++);
				cell.setCellValue(entry.getValue()) ;
				cell.setCellStyle(style);
			}
		}else{
			if(rowData.size()>0){
				setHeader = rowData.get(0).keySet() ;
				for(String str : setHeader){
					HSSFCell cell = row.createCell(idx++);
					cell.setCellValue(str) ;
					cell.setCellStyle(style);
				}
			}
		}
		// ---- 导出表头结束
		
		// 导出内容
		for(int i=0 ;i<rowData.size() ;i++){
			idx = 0 ;
			Map map =  rowData.get(i) ;
			HSSFRow row1 = sheet.createRow(i+1) ;
			if(header != null){
				for(Map.Entry<String, String> entry : header.entrySet()){
					HSSFCell cell = row1.createCell(idx++);
					//处理空值情况
					Object cellValue = map.get(entry.getKey()) ;
					cell.setCellValue(cellValue == null?"":cellValue.toString()) ;
					cell.setCellStyle(style);
				}	
			}else{
				for(String str : setHeader){
					HSSFCell cell = row1.createCell(idx++);
					//处理空值情况
					Object cellValue = map.get(str) ;
					cell.setCellValue(cellValue == null?"":cellValue.toString()) ;
				}
			}
			
		}
		// 生成  excel文件
		try {
			wb.write(new FileOutputStream(file)) ;
		} catch (FileNotFoundException e) {
			throw new BizException(e);
		} catch (IOException e) {
			throw new BizException(e);
		}
	}
	/**
	 * 表头是动态生成的
	 * @param filePath : 文件路径
	 * @param header : 表头
	 * @param delimiter : 表头分隔符
	 * @param rowData : 数据
	 */
	public static void exportExcel(String filePath,List<String> header,String delimiter,List<?> rowData){
		File file = new File(filePath) ;
		if(file.exists()){// 删除临时文件
			file.delete() ;
		}
		//创建  excel文件
		HSSFWorkbook wb = new HSSFWorkbook() ;
		//表样式
		HSSFCellStyle style=wb.createCellStyle();
		style.setAlignment(HSSFCellStyle.ALIGN_CENTER);
		style.setWrapText(true);
		// 创建sheet  每个数据表创建一个 sheet
		HSSFSheet sheet = wb.createSheet() ;
		sheet.autoSizeColumn(0);
		sheet.setDefaultColumnWidth(20);
		// 导出表头
		HSSFRow row = sheet.createRow(0) ;
		int idx = 0;
		for(String str : header){
			HSSFCell cell = row.createCell(idx++);
			cell.setCellValue(str.indexOf(delimiter)==-1?str:str.substring(str.indexOf(delimiter)+1)) ;
			cell.setCellStyle(style);
		}
		// ---- 导出表头结束
		
		// 导出内容
		for(int i=0 ;i<rowData.size() ;i++){
			idx = 0 ;
			Object obj = rowData.get(i) ;
			HSSFRow row1 = sheet.createRow(i+1) ;
			if(header != null){
				for(int j=0;j<header.size();j++){
					HSSFCell cell = row1.createCell(j);
					Object cellValue = null;
					//处理空值情况
					if(obj instanceof Map){
						String str = header.get(j) ;
						cellValue = ((Map)obj).get(str.indexOf(delimiter)==-1?str:str.substring(0,str.indexOf(delimiter))) ;
					}else if(obj instanceof List){
						cellValue = ((List)obj).get(j);
					}else{
						// 扩展其他分类
					}
					cell.setCellValue(cellValue == null?"":cellValue.toString()) ;
					cell.setCellStyle(style);
				}	
			}
		}
		// 生成  excel文件
		try {
			wb.write(new FileOutputStream(file)) ;
		} catch (FileNotFoundException e) {
			throw new BizException(e);
		} catch (IOException e) {
			throw new BizException(e);
		}
	}
}

```
