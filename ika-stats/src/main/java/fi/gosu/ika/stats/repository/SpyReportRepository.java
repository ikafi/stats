package fi.gosu.ika.stats.repository;

import fi.gosu.ika.stats.domain.SpyReport;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * SpyReport Repository
 *
 * Created by Joppe151617 on 30.4.2017.
 */
public interface SpyReportRepository extends JpaRepository<SpyReport, Long> {
}
